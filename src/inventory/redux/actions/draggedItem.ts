import {
  DRAGGED_ITEM_SET,
  HOVERED_SQUARES_SET,
  DRAGGED_ITEM_RELEASE,
  GOING_TO_DROP_SET
} from "./types";
import {xMin, xMax, yMin, yMax} from "../../constants/boardDimensions";
import Item from "../../models/Item";
import {GoingToStack} from "../reducers/draggedItem";
import {
  addItem, addItemBySquares,
  boardChangeCurrentCountByItemId,
  changeEquippedState,
  removeItem,
  removeItemFromBoard
} from "./board";
import {
  equippedChangeCurrentCount,
  removeEquippedItem,
  removeEquippedWeaponFromEquipped,
  setEquippedItem
} from "./equippedItems";
import {EquippedCategoriesToCells} from "../../constants/dnd/equippedCategoriesToCells";
import {ItemTypes} from "../../constants/dnd/types";
import {
  addExternalBoardItem, addExternalItemsBySquares,
  externalBoardChangeCurrentCountByItemId,
  removeExternalBoardItem,
  removeExternalBoardItemById
} from "./externalBoard";
import {addHoveredItem} from "./hoveredItem";
import {
  mpTriggerDropExternalItem,
  mpTriggerDropItem, mpTriggerRotateBoardItem, mpTriggerRotateExternalItem, mpTriggerStackFromExternalItem,
  mpTriggerStackFromExternalToExternalItem,
  mpTriggerStackItem, mpTriggerStackToExternalItem
} from "../../utils/mpTriggers";

const _addDraggedItem = (item, xUp, xDown, yUp, yDown, draggedItemArea = 1) => {
  return {type: DRAGGED_ITEM_SET, item, xUp, xDown, yUp, yDown, draggedItemArea};
};

const _setHoveredSquares = (squareCoords, allHoveredSquares, canDrop, hoveredArea, goingToStack = null) => {
  return {
    type: HOVERED_SQUARES_SET, square: squareCoords, squares: allHoveredSquares, canDrop,
    hoveredArea: hoveredArea, goingToStack
  };
};

const _setGoingToDrop = (newState, canDrop, areaId) => {
  return {type: GOING_TO_DROP_SET, goingToDrop: newState, canDrop, areaId};
}

const draggedItemRelease = () => {
  return {type: DRAGGED_ITEM_RELEASE};
}

//region Utils to find xUp,xDwn,... (itemWidth can be actual item.width or can be item.height when item is rotated
let _getItemOffsets: (itemWidth: number, itemHeight: number) => {xUp: number, xDown: number, yUp: number, yDown: number};
_getItemOffsets = (itemWidth, itemHeight) => {
  let xUp, xDown, yUp, yDown;
  // region ------------------------------ Horizontal offsets ------------------------------
  // If even
  if (itemWidth % 2 === 0) {
    xUp = itemWidth / 2;
    xDown = itemWidth / 2 - 1;
  }
  // If odd
  else {
    xUp = Math.floor(itemWidth / 2);
    xDown = Math.floor(itemWidth / 2);
  }
  //endregion

  // region ------------------------------ Vertical offsets ------------------------------
  if (itemHeight % 2 === 0) {
    yUp = itemHeight / 2;
    yDown = itemHeight / 2 - 1;
  } else {
    yUp = Math.floor(itemHeight / 2);
    yDown = Math.floor(itemHeight / 2);
  }
  //endregion
  return {xUp, xDown, yUp, yDown};
}
//endregion

// need to know item
let addDraggedItem: (item: Item, draggedItemArea: number, fromRotate?: boolean,
                     prevGoingToDropAreaId?: number | null, prevHoveredArea?: number | null,
                     prevHoveredSquare?: [number, number] | number | null) => void
addDraggedItem = (item, draggedItemArea,
                        fromRotate = false, goingToDropAreaId = null,
                        prevHoveredArea = null, prevHoveredSquare = null) => {
  return dispatch => {
    //region ------------------------------ Swap width and height if item is rotating ------------------------------
    let itemWidth = item.width;
    let itemHeight = item.height;

    if (item.isRotated) {
      itemWidth = item.height;
      itemHeight = item.width;
    }
    //endregion

    //region ------------------------------ Set offsets ------------------------------
    const {xUp, xDown, yUp, yDown} = _getItemOffsets(itemWidth, itemHeight);
    //endregion

    //region ------------------------------ Add dragged item and set hovered square(s) ------------------------------

    dispatch(_addDraggedItem({...item}, xUp, xDown, yUp, yDown, draggedItemArea));

    // todo last-remove set hovsq if !from rotate and from eq items
    // dispatch(setHoveredSquares(item.mainCell, 3));

    //endregion

    //region ------------------------------ If from rotate set hoveredSq and canDrop etc ------------------------------
    if (fromRotate) {
      if (goingToDropAreaId) {
        dispatch(_setGoingToDrop(true, true, goingToDropAreaId));
      }
      else if(prevHoveredArea === 1 || prevHoveredArea === 2 || prevHoveredArea === 3) {
        dispatch(setHoveredSquares(prevHoveredSquare, prevHoveredArea));
      }
    }
  }
};

// utils to setHoveredSquares
const _getHoveredSquares = (hoveredSquare: [number, number], xUp: number, xDown: number, yUp: number, yDown: number) => {
  const [x, y] = hoveredSquare;
  const allHoveredSquares = [];

  for (let i = x - xDown; i <= x + xUp; i++) {
    for (let j = y - yDown; j <= y + yUp; j++) {
      allHoveredSquares.push([i, j]);
    }
  }
  return allHoveredSquares;
}

const setHoveredSquares = (hoveredSquare, hoveredArea = 1) => {
  return (dispatch, getState) => {
    const {
      draggedItem: {xDown, xUp, yDown, yUp, item, draggedItemArea},
      board: {board},
      externalBoard: {externalBoard},
      equippedItems: {cells: equippedCells}
    } = getState();

    let canDrop: boolean = true;
    // stack logic
    // indicate goingToStack if not null
    let stackableItem: Item | null = null;
    let stackableItemNewCurrentCount: number = 0;
    // indicates should remove draggedItem
    let draggedItemNewCurrentCount: number = 0;
    let allHoveredSquares = [];

    //region ------------------------------ If board hovered ------------------------------
    if (hoveredArea === 1) {
      allHoveredSquares = _getHoveredSquares(hoveredSquare, xUp, xDown, yUp, yDown);
      // check canDrop
      allHoveredSquares.forEach(hoveredSquare => {
        const [hoveredX, hoveredY] = hoveredSquare;
        // if outside the border
        if (hoveredX < xMin || hoveredX > xMax || hoveredY < yMin || hoveredY > yMax) {
          canDrop = false;
          // if has item on board and item is not the dragged item
        } else if (board[hoveredY][hoveredX] !== null) { // id check just to set up canDrop = false
          const boardSquare = board[hoveredY][hoveredX];

          if(boardSquare.id !== item.id) {
            canDrop = false;
          }

          // last-remove maincells is not equal too
          const isAllowToStack = boardSquare.name === item.name
            && boardSquare.id !== item.id
            && boardSquare.currentCount && boardSquare.maxCount
            && boardSquare.currentCount < boardSquare.maxCount;
          if (isAllowToStack) {
            stackableItem = boardSquare;

            // drag item from board (to board) and allowToStack === true
            if (stackableItem.maxCount >= stackableItem.currentCount + item.currentCount) {
              // if can stack full draggedItem
              stackableItemNewCurrentCount = stackableItem.currentCount + item.currentCount;
              draggedItemNewCurrentCount = 0;
            } else if (stackableItem.maxCount < stackableItem.currentCount + item.currentCount) {
              // can stack only part of draggedItem
              stackableItemNewCurrentCount = stackableItem.maxCount;
              // тут не так считать надо а
              draggedItemNewCurrentCount = item.currentCount - (stackableItem.maxCount - stackableItem.currentCount);
            }
          }
        }
      });
    }
    //endregion
    //region ------------------------------ If equipped hovered ----------------------------------------
    else if (hoveredArea === 3) {
      // if equipped inventory hovered

      const equippedSquareItem = equippedCells[hoveredSquare].item; // stackable square
      const allowedCategory = EquippedCategoriesToCells[hoveredSquare];
      if (allowedCategory !== item.category) {
        //check category
        canDrop = false;
      } else if (equippedSquareItem !== null) {
        if(equippedSquareItem.id !== item.id) {
          canDrop = false;
        }
        // last-remove maincells is not equal too
        // check if required cell already has another item
        const isAllowToStack = equippedSquareItem.name === item.name
          && equippedSquareItem.id !== item.id
          && equippedSquareItem.currentCount && equippedSquareItem.maxCount
          && equippedSquareItem.currentCount < equippedSquareItem.maxCount;

        if (isAllowToStack) {
          stackableItem = {...equippedSquareItem};
          // no matter dragged from board or equipped to equipped
          if (equippedSquareItem.maxCount >= equippedSquareItem.currentCount + item.currentCount) {
            // can stack full item
            stackableItemNewCurrentCount = equippedSquareItem.currentCount + item.currentCount;
            draggedItemNewCurrentCount = 0;
          } else if (equippedSquareItem.maxCount < equippedSquareItem.currentCount + item.currentCount) {
            // can't stack full item
            stackableItemNewCurrentCount = equippedSquareItem.maxCount;
            draggedItemNewCurrentCount = item.currentCount - (stackableItem.maxCount - stackableItem.currentCount);
          }
        }
      }

    }
    //endregion
    //region ------------------------------ If external board hovered ----------------------------------------
    else if (hoveredArea === 2) {
      allHoveredSquares = _getHoveredSquares(hoveredSquare, xUp, xDown, yUp, yDown);
      // check canDrop
      allHoveredSquares.forEach(hoveredSquare => {
        const [hoveredX, hoveredY] = hoveredSquare;

        const xMin = 0;
        const yMin = 0;
        const xMax = externalBoard[0].length - 1;
        const yMax = externalBoard.length - 1;
        // if outside the border
        if (hoveredX < xMin || hoveredX > xMax || hoveredY < yMin || hoveredY > yMax) {
          canDrop = false;
          // if has item on board and item is not the dragged item
        } else if (externalBoard[hoveredY][hoveredX] !== null) { // id check just to set up canDrop = false
          const boardSquare = externalBoard[hoveredY][hoveredX];

          if(boardSquare.id !== item.id) {
            canDrop = false;
          }

          // last-remove maincells is not equal too
          const isAllowToStack = boardSquare.name === item.name
            && boardSquare.id !== item.id
            && boardSquare.currentCount && boardSquare.maxCount
            && boardSquare.currentCount < boardSquare.maxCount;
          if (isAllowToStack) {
            stackableItem = boardSquare;

            // drag item from board (to board) and allowToStack === true
            if (stackableItem.maxCount >= stackableItem.currentCount + item.currentCount) {
              // if can stack full draggedItem
              stackableItemNewCurrentCount = stackableItem.currentCount + item.currentCount;
              draggedItemNewCurrentCount = 0;
            } else if (stackableItem.maxCount < stackableItem.currentCount + item.currentCount) {
              // can stack only part of draggedItem
              stackableItemNewCurrentCount = stackableItem.maxCount;
              draggedItemNewCurrentCount = item.currentCount - (stackableItem.maxCount - stackableItem.currentCount);
            }
          }
        }
      });
    }
    //endregion

    if (stackableItem) {
      // similar dispatch, but with canDrop === true
      const goingToStack: GoingToStack = {
        stackableItem,
        stackableItemNewCurrentCount,
        draggedItemNewCurrentCount
      }
      dispatch(_setHoveredSquares(hoveredSquare, allHoveredSquares, canDrop = true, hoveredArea,
        goingToStack));
    } else {
      dispatch(_setHoveredSquares(hoveredSquare, allHoveredSquares, canDrop, hoveredArea));
    }
  }
};

// non-relative to redux, fix bug with invoking onmouseup on BoardSquare, when pointer-events did not have
// time to become true
const invokeOnMouseUp = () => {
  const draggedItem = document.getElementById('curr-dragged-item');
  const event = new Event('mouseup');
  draggedItem.dispatchEvent(event);
}

const stackItem = (fromSplit = false) => {
  return (dispatch, getState) => {
    // distinct action for stack (invoke in SquareCommonItem and SquareEquippedItem and RangeComponent on mouse up
    const
      {
        draggedItem: {
          item: draggedItem,
          draggedItemArea,
          hoveredArea,
          goingToStack: {
            stackableItem, stackableItemNewCurrentCount: srcStackableItemNewCurrC,
            draggedItemNewCurrentCount: srcDraggedItemNewCurrC
          }
        }
      } = getState();

    let stackableItemNewCurrentCount: number = srcStackableItemNewCurrC;
    let draggedItemNewCurrentCount: number = srcDraggedItemNewCurrC;

    //region ------------------------------ Reduce count / remove draggedItem ------------------------------
    if (!fromSplit) {
      if (draggedItemArea === 1) {
        dispatch(boardChangeCurrentCountByItemId(draggedItem.id, draggedItemNewCurrentCount));
      } else if (draggedItemArea === 2) {
        dispatch(externalBoardChangeCurrentCountByItemId(draggedItem.id, draggedItemNewCurrentCount));
      } else if (draggedItemArea === 3) {
        dispatch(equippedChangeCurrentCount(draggedItem.mainCell, draggedItemNewCurrentCount));
      }
    }
    //endregion

    //region ------------------------------ Change stackable item (non-depend on came fromSplit or not) ------------------------------
    if (hoveredArea === 1) {
      // stack to board
      dispatch(boardChangeCurrentCountByItemId(stackableItem.id, stackableItemNewCurrentCount));
    } else if (hoveredArea === 2) {
      dispatch(externalBoardChangeCurrentCountByItemId(stackableItem.id, stackableItemNewCurrentCount));
    } else if (hoveredArea === 3) {
      dispatch(equippedChangeCurrentCount(stackableItem.mainCell, stackableItemNewCurrentCount));
    }
    //endregion

    // if fromSplit change draggedItemNewCurrentCount
    if (fromSplit) {
      stackableItem.currentCount = stackableItemNewCurrentCount;

      // find out source draggedItem count
      if (draggedItemArea === 1) {
        const {currentCount: srcItemcCount} = getState().board.board[draggedItem.mainCell[1]][draggedItem.mainCell[0]];
        // how many units was added to stackable and removed from dragged
        const stackedCount = draggedItem.currentCount - draggedItemNewCurrentCount;
        draggedItemNewCurrentCount = srcItemcCount - stackedCount;
        dispatch(boardChangeCurrentCountByItemId(draggedItem.id, draggedItemNewCurrentCount));
      }
      else if (draggedItemArea === 2) {
        const {currentCount: srcItemcCount} =
          getState().externalBoard.externalBoard[draggedItem.mainCell[1]][draggedItem.mainCell[0]];
        const stackedCount = draggedItem.currentCount - draggedItemNewCurrentCount;
        draggedItemNewCurrentCount = srcItemcCount - stackedCount;
        dispatch(externalBoardChangeCurrentCountByItemId(draggedItem.id, draggedItemNewCurrentCount));
      }
      else if (draggedItemArea === 3) {
        const {currentCount: srcItemcCount} =
          getState().equippedItems.cells[draggedItem.mainCell].item;
        const stackedCount = draggedItem.currentCount - draggedItemNewCurrentCount;
        draggedItemNewCurrentCount = srcItemcCount - stackedCount;
        dispatch(equippedChangeCurrentCount(draggedItem.mainCell, draggedItemNewCurrentCount));
      }
    }
    // -----------

    draggedItem.currentCount = draggedItemNewCurrentCount;
    stackableItem.currentCount = stackableItemNewCurrentCount;
    if(draggedItemNewCurrentCount === 0) {
      draggedItem.mainCell = stackableItem.mainCell;
    }

    //region ------------------------------ Invoke triggers ------------------------------

    // if stack related to external board use different triggers
    if(draggedItemArea === 2 || hoveredArea === 2) {

      // if stack from external board
      if(draggedItemArea === 2) {
        // stack from external board to external
        if(hoveredArea === 2) {
          mpTriggerStackFromExternalToExternalItem(draggedItem, stackableItem);
        }
        else if (hoveredArea === 1 || hoveredArea === 3) {
          mpTriggerStackFromExternalItem(draggedItem, stackableItem);
        }
      }
      else {
        // stack to externalBoard ( hoveredArea === 2 )
        // need no check draggedItemArea === 2, coz already
        mpTriggerStackToExternalItem(draggedItem, stackableItem);
      }
    } else {
      // stack between board and equipped
      mpTriggerStackItem(draggedItem, stackableItem);
    }
    //endregion

  }
}

const setGoingToDrop = (newState, areaId = 2) => {
  return dispatch => {
    // todo limit on clothes
    const canDrop = newState;
    dispatch(_setGoingToDrop(newState, canDrop, areaId));
  }
}

const rotateItem = () => {
  return (dispatch, getState) => {
    const oldDraggedItemInfo = {...getState().draggedItem};
    const oldDraggedItem = oldDraggedItemInfo.item;

    oldDraggedItem.isRotated = !oldDraggedItem.isRotated;

    //region ------------------------------ Visual rotate item ------------------------------
    const draggedItem = document.getElementById('curr-dragged-item');

    if (oldDraggedItem.isRotated) {
      draggedItem.style.transform = 'rotate(90deg)';
    } else {
      draggedItem.style.transform = 'none';
    }
    //endregion
    dispatch(draggedItemRelease());

    //region ------------------------------ Save goingToDrop ------------------------------
    if(oldDraggedItemInfo.goingToDrop) {
      dispatch(addDraggedItem({...oldDraggedItem}, 0,
        oldDraggedItemInfo.goingToDrop.areaId));
    }
    //endregion
    //save other data
    else {
      dispatch(addDraggedItem({...oldDraggedItem}, oldDraggedItemInfo.draggedItemArea,
        true, null, oldDraggedItemInfo.hoveredArea,
        oldDraggedItemInfo.hoveredSquare));
    }
  }
}

// rotate non-dragged item on board and external board
const rotateItemOnBoard = (item, hoveredItemArea) => {
  const newItem = {...item};

  newItem.isRotated = !newItem.isRotated;

  let itemWidth = newItem.width;
  let itemHeight = newItem.height;

  if(newItem.isRotated) {
    itemWidth = newItem.height;
    itemHeight = newItem.width;
  }

  const {xUp, xDown, yUp, yDown} = _getItemOffsets(itemWidth, itemHeight);

  const averageCell: [number, number] = [newItem.mainCell[0] + yDown, newItem.mainCell[1] + xDown];

  const allHoveredSquares = _getHoveredSquares(averageCell, xUp, xDown, yUp, yDown);

  return (dispatch, getState) => {

    //region ------------------------------ Rotate board item ------------------------------
    if(hoveredItemArea === 1) {
      const {board} = getState().board;
      let canDrop = true;

      // allHoveredSquares already calculated based on isRotated prop
      allHoveredSquares.forEach(hoveredSquare => {
        const [hoveredX, hoveredY] = hoveredSquare;

        if (hoveredX < xMin || hoveredX > xMax || hoveredY < yMin || hoveredY > yMax) {
          canDrop = false;
          // if has item on board and item is not the dragged item
        } else if(board[hoveredY][hoveredX] !== null) {
          if(board[hoveredY][hoveredX].id !== newItem.id) {
            canDrop = false;
          }
        }
      });

      if(canDrop) {
        newItem.mainCell = [averageCell[0] - xDown, averageCell[1] - yDown];
        dispatch(removeItemFromBoard(item.id));
        dispatch(addItemBySquares(allHoveredSquares, newItem));
        dispatch(addHoveredItem(newItem, 1));
        mpTriggerRotateBoardItem(newItem);
      }
    }
    //endregion

    //region ------------------------------ Rotate external board item ------------------------------
    else if (hoveredItemArea === 2) {
      const {externalBoard} = getState().externalBoard;
      let canDrop = true;

      allHoveredSquares.forEach(hoveredSquare => {
        const [hoveredX, hoveredY] = hoveredSquare;
        if (hoveredX < xMin || hoveredX > xMax || hoveredY < yMin || hoveredY > externalBoard.length - 1) {
          canDrop = false;
          // if has item on board and item is not the dragged item
        } else if(externalBoard[hoveredY][hoveredX] !== null) {
          if(externalBoard[hoveredY][hoveredX].id !== newItem.id) {
            canDrop = false;
          }
        }
      });
      if(canDrop) {
        newItem.mainCell = [averageCell[0] - xDown, averageCell[1] - yDown];
        dispatch(removeExternalBoardItemById(item.id));
        dispatch(addExternalItemsBySquares(allHoveredSquares, newItem));
        dispatch(addHoveredItem(newItem, 2));
        mpTriggerRotateExternalItem(newItem);
      }
    }
    //endregion
  }
}

//region ------------------------------ Utils to dragEndHandler ------------------------------
let _moveToEquippedItems: (dispatch: (any) => void, getState: () => any,
                            draggedItem: Item, draggedItemArea: number, hoveredSquare: number) => void;
_moveToEquippedItems = (dispatch, getState, draggedItem, draggedItemArea, hoveredSquare) => {
  if(draggedItemArea === 1) {
    if (draggedItem.category === ItemTypes.WEAPON_RIFLE || draggedItem.category === ItemTypes.WEAPON_PISTOL
      || draggedItem.category === ItemTypes.WEAPON_LAUNCHER) {
      // if weapon make transparent color
      dispatch(changeEquippedState(draggedItem, true));
    } else {
      dispatch(removeItemFromBoard(draggedItem.id));
    }
    try {
      dispatch(setEquippedItem(hoveredSquare));
    } catch (e) {}
  }
  else if (draggedItemArea === 2) {

    //region ------------------------------ Check if we want to equip ------------------------------
    if(draggedItem.category === ItemTypes.WEAPON_RIFLE || draggedItem.category === ItemTypes.WEAPON_PISTOL
      || draggedItem.category === ItemTypes.WEAPON_LAUNCHER) {
      //region ------------------------------ Utils to get suitable space ------------------------------
      const _getSuitableSpace = (itemHeight, itemWidth) => {
        const board = getState().board.board;
        let breakExternalBoardLoop: boolean = false;
        let breakExternalLoop: boolean = false;
        let newMainCellOnBoard: [number, number] | null = null;

        // todo distinct func
        for(let y = 0; y < yMax - itemHeight; y++) {
          breakExternalBoardLoop = false;
          for(let x = 0; x < xMax - itemWidth; x++) {
            breakExternalLoop = false;
            // loop through all item squares
            for(let hypotheticalItemY = y; hypotheticalItemY < y + itemHeight; hypotheticalItemY++) {
              for(let hypotheticalItemX = x; hypotheticalItemX < x + itemWidth; hypotheticalItemX++) {
                if(board[hypotheticalItemY][hypotheticalItemX]) {
                  // if board already has item on that square we should check
                  // new square in loop through board cycle
                  breakExternalLoop = true;
                  break;
                }
              }
              if(breakExternalLoop) {
                break;
              }
            }
            if(!breakExternalLoop) {
              // if found suitable space
              newMainCellOnBoard = [x,y];
              breakExternalBoardLoop = true;
              break;
            }
          }
          if(breakExternalBoardLoop) {
            breakExternalBoardLoop = false;
            break;
          }
        }
        return newMainCellOnBoard;
      }
      //endregion
      let newMainCellOnBoard: [number, number] | null = _getSuitableSpace(draggedItem.height, draggedItem.width);
      let isRotated: boolean = false;


      if(!newMainCellOnBoard) {
        // try rotate
        newMainCellOnBoard = _getSuitableSpace(draggedItem.width, draggedItem.height);
        isRotated = true;
      }

      if(newMainCellOnBoard) {
        const squares = [];
        // to rotate
        let draggedItemHeight = draggedItem.height;
        let draggedItemWidth = draggedItem.width;

        if(isRotated) {
          draggedItem.isRotated = true;
          draggedItemHeight = draggedItem.width;
          draggedItemWidth = draggedItem.height
        }

        for(let y = newMainCellOnBoard[1]; y < newMainCellOnBoard[1] + draggedItemHeight; y++) {
          for(let x = newMainCellOnBoard[0]; x < newMainCellOnBoard[0] + draggedItemWidth; x++) {
            squares.push([x,y]);
          }
        }
        dispatch(removeExternalBoardItemById(draggedItem.id));
        dispatch(setEquippedItem(hoveredSquare));
        dispatch(addItemBySquares(squares, {...draggedItem, mainCell: newMainCellOnBoard,
          isWeaponEquipped: true}));
      } else {
        console.log('no space')
      }
    }
    //endregion
    else {
      dispatch(removeExternalBoardItemById(draggedItem.id));
      try {
        dispatch(setEquippedItem(hoveredSquare));
      } catch (e) {}
    }
  }
  else if (draggedItemArea === 3) {
    if (draggedItem.mainCell !== hoveredSquare) {
      // check if not the same item
      dispatch(removeEquippedItem(draggedItem.mainCell));
      try {
        // try coz mp.trigger
        dispatch(setEquippedItem(hoveredSquare));
      } catch (e) {}
    }
  }
}

let _moveToBoard: (dispatch: (any) => void, draggedItem: Item, draggedItemArea: number) => void;
_moveToBoard = (dispatch, draggedItem, draggedItemArea) => {
    if(draggedItemArea === 1) {
      dispatch(removeItemFromBoard(draggedItem.id));
    } else if (draggedItemArea === 2) {
      dispatch(removeExternalBoardItemById(draggedItem.id));
    } else if (draggedItemArea ===  3) {
      dispatch(removeEquippedItem(draggedItem.mainCell));
      if (draggedItem.category === ItemTypes.WEAPON_RIFLE || draggedItem.category === ItemTypes.WEAPON_PISTOL
        || draggedItem.category === ItemTypes.WEAPON_LAUNCHER) {
        // if item is weapon - remove prev item from board and set isWeaponEquipped to false
        dispatch(removeItemFromBoard(draggedItem.id));
      }
    }
    try {
      dispatch(addItem());
    } catch (e) {}
}

let _moveToExternalBoard: (dispatch: (any) => void, draggedItem: Item, draggedItemArea: number) => void;
_moveToExternalBoard = (dispatch, draggedItem, draggedItemArea) => {
  if(draggedItemArea === 1) {
    dispatch(removeItemFromBoard(draggedItem.id));
    if (draggedItem.category === ItemTypes.WEAPON_RIFLE || draggedItem.category === ItemTypes.WEAPON_PISTOL
      || draggedItem.category === ItemTypes.WEAPON_LAUNCHER) {
      // if item is weapon - remove prev item from board and set isWeaponEquipped to false
      dispatch(removeEquippedWeaponFromEquipped(draggedItem.id));
    }
  }
  else if(draggedItemArea === 2) {
    dispatch(removeExternalBoardItemById(draggedItem.id));
  }
  else if (draggedItemArea === 3) {
    dispatch(removeEquippedItem(draggedItem.mainCell));
    if (draggedItem.category === ItemTypes.WEAPON_RIFLE || draggedItem.category === ItemTypes.WEAPON_PISTOL
      || draggedItem.category === ItemTypes.WEAPON_LAUNCHER) {
      // if item is weapon - remove prev item from board and set isWeaponEquipped to false
      dispatch(removeItemFromBoard(draggedItem.id));
    }
  }
  try {
    dispatch(addExternalBoardItem());
  } catch (e) {}
}
//endregion

const dragEndHandler = () => {
  return (dispatch, getState) => {
    const {canDrop, goingToStack, goingToDrop, item: draggedItem, hoveredSquare, hoveredArea, draggedItemArea} = getState().draggedItem;

    if (canDrop) {
      if (goingToStack) {
        dispatch(stackItem());
      }
      //region ------------------------------ Drop out ------------------------------
      else if (goingToDrop) {
        // already have no hovered squares
        if (typeof draggedItem.mainCell === 'object') {
          // if drop item from boards
          if(draggedItemArea === 1) {
            if (draggedItem.category === ItemTypes.WEAPON_RIFLE || draggedItem.category === ItemTypes.WEAPON_PISTOL
              || draggedItem.category === ItemTypes.WEAPON_LAUNCHER) {
              dispatch(removeEquippedWeaponFromEquipped(draggedItem.id));
            }
            dispatch(removeItem(draggedItem.mainCell, draggedItem.width, draggedItem.height));
            mpTriggerDropItem(draggedItem);
          } else if (draggedItemArea === 2) {
            dispatch(removeExternalBoardItem(draggedItem.mainCell, draggedItem.width, draggedItem.height));
            mpTriggerDropExternalItem(draggedItem);
          }
        } else if(draggedItemArea === 3) {
          // drop item from equipped
          if (draggedItem.category === ItemTypes.WEAPON_RIFLE || draggedItem.category === ItemTypes.WEAPON_PISTOL
            || draggedItem.category === ItemTypes.WEAPON_LAUNCHER) {
            dispatch(removeItemFromBoard(draggedItem.id));
          }
          // @ts-ignore
          dispatch(removeEquippedItem(draggedItem.mainCell));
          mpTriggerDropItem(draggedItem);
        }
      }
        //endregion

      //region ------------------------------ Move to equipped items ------------------------------
      else if (hoveredArea === 3) {
        _moveToEquippedItems(dispatch, getState, draggedItem, draggedItemArea, hoveredSquare);
      }
      //endregion

      //region ------------------------------ Move to board ------------------------------
      else if(hoveredArea === 1) {
        _moveToBoard(dispatch, draggedItem, draggedItemArea);
      }
      //endregion

      //region ------------------------------ Move to external board ------------------------------
      else if(hoveredArea === 2) {
        _moveToExternalBoard(dispatch, draggedItem, draggedItemArea);
      }
      //endregion
    }
    dispatch(draggedItemRelease());
  }
}

export {
  addDraggedItem,
  draggedItemRelease,
  setHoveredSquares,
  invokeOnMouseUp,
  stackItem,
  setGoingToDrop,
  rotateItem,
  dragEndHandler,
  // rotate non-dragged item
  rotateItemOnBoard
}