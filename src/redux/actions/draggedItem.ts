import {
  DRAGGED_ITEM_SET,
  HOVERED_SQUARES_SET,
  HOVERED_SQUARES_REMOVE,
  DRAGGED_ITEM_RELEASE,
  GOING_TO_DROP_SET
} from "./types";
import {xMin, xMax, yMin, yMax} from "../../constants/boardDimensions";
import Item from "../../models/Item";
import {GoingToStack} from "../reducers/draggedItem";
import {boardChangeCurrentCount, removeItem} from "./board";
import {equippedChangeCurrentCount, removeEquippedItem} from "./equippedItems";
import {translateToServerItem} from "../../utils/translateToServerItem";
import {EquippedCategoriesToCells} from "../../constants/dnd/equippedCategoriesToCells";

const _addDraggedItem = (item, xUp, xDown, yUp, yDown) => {
  return {type: DRAGGED_ITEM_SET, item, xUp, xDown, yUp, yDown};
};

const _setHoveredSquares = (squareCoords, allHoveredSquares, canDrop, isHoveredEquipped, goingToStack = null) => {
  return {
    type: HOVERED_SQUARES_SET, square: squareCoords, squares: allHoveredSquares, canDrop,
    isHoveredEquipped: isHoveredEquipped, goingToStack
  };
};

const _setGoingToDrop = (newState, canDrop, areaId) => {
  return {type: GOING_TO_DROP_SET, goingToDrop: newState, canDrop, areaId};
}

const hoveredSquaresRemove = () => {
  return {type: HOVERED_SQUARES_REMOVE};
}

const draggedItemRelease = () => {
  return {type: DRAGGED_ITEM_RELEASE};
};

// [x,y] - hoveredSquare
const addDraggedItem = (item, [x, y] = [0, 0], fromRotate = false, hoveredSquareIfEquippedHovered = null) => {
  return dispatch => {
    let xUp, yUp, xDown, yDown, xAver, yAver;

    let itemWidth = item.width;
    let itemHeight = item.height;

    if (item.isRotated) {
      itemWidth = item.height;
      itemHeight = item.width;
    }

    if (!item.isEquipped) {
      const [mainCellX, mainCellY] = item.mainCell;

      // average X and Y for aligning
      if (itemWidth % 2 === 0) {
        xAver = mainCellX + itemWidth / 2 - 1;
      } else {
        xAver = mainCellX + Math.floor(itemWidth / 2);
      }

      if (itemHeight % 2 === 0) {
        yAver = mainCellY + itemHeight / 2 - 1;
      } else {
        yAver = mainCellY + Math.floor(itemHeight / 2);
      }

      xUp = mainCellX + itemWidth - 1 - xAver;
      xDown = xAver - mainCellX;

      yUp = mainCellY + itemHeight - 1 - yAver;
      yDown = yAver - mainCellY;

      // set hovered squares
      const hoveredSquares = [];

      for (let i = x - xDown; i <= x + xUp; i++) {
        for (let j = y - yDown; j <= y + yUp; j++) {
          hoveredSquares.push([i, j]);
        }
      }

      dispatch(_addDraggedItem({...item}, xUp, xDown, yUp, yDown));
      if (x !== -100 && !fromRotate) {
        dispatch(_setHoveredSquares([x, y], hoveredSquares, true, false));
      } else if (x !== -100) {
        dispatch(setHoveredSquares([x, y], false));
      }
    } else {
      // item is equipped
      if (itemWidth % 2 === 0) {
        xUp = itemWidth / 2;
        xDown = itemWidth / 2 - 1;
      } else {
        xUp = Math.floor(itemWidth / 2);
        xDown = Math.floor(itemWidth / 2);
      }

      if (itemHeight % 2 === 0) {
        yUp = itemHeight / 2;
        yDown = itemHeight / 2 - 1;
      } else {
        yUp = Math.floor(itemHeight / 2);
        yDown = Math.floor(itemHeight / 2);
      }

      dispatch(_addDraggedItem({...item}, xUp, xDown, yUp, yDown));
      if (!fromRotate) {
        dispatch(setHoveredSquares(item.mainCell, true));
      }
    }

    // can't be 0, coz equipped starts from 1
    if(hoveredSquareIfEquippedHovered) {
      dispatch(setHoveredSquares(hoveredSquareIfEquippedHovered, true));
    }
  };
};

// utils to setHoveredSquares
const __fillHoveredSquares = (hoveredSquare: [number, number], xDown: number, yDown: number, xUp: number, yUp: number) => {
  const [x, y] = hoveredSquare;
  const allHoveredSquares = [];

  for (let i = x - xDown; i <= x + xUp; i++) {
    for (let j = y - yDown; j <= y + yUp; j++) {
      allHoveredSquares.push([i, j]);
    }
  }
  return allHoveredSquares;
}

const setHoveredSquares = (hoveredSquare, isHoveredEquipped = false) => {
  return (dispatch, getState) => {
    const {draggedItem: {xDown, xUp, yDown, yUp, item}, board: {board}, equippedItems: {cells: equippedCells}} = getState();

    let canDrop: boolean = true;
    // stack logic
    // indicate goingToStack if not null
    let stackableItem: Item | null = null;
    let stackableItemNewCurrentCount: number = 0;
    // indicates should remove draggedItem
    let draggedItemNewCurrentCount: number = 0;

    let allHoveredSquares = [];

    // --------------------------------------- If board hovered -------------------------------------------
    if (!isHoveredEquipped) {
      allHoveredSquares = __fillHoveredSquares(hoveredSquare, xDown, yDown, xUp, yUp);
      // check canDrop
      allHoveredSquares.forEach(hoveredSquare => {
        const [hoveredX, hoveredY] = hoveredSquare;
        // if outside the border
        if (hoveredX < xMin || hoveredX > xMax || hoveredY < yMin || hoveredY > yMax) {
          canDrop = false;
          // if has item on board and item is not the dragged item
        } else if (board[hoveredY][hoveredX] !== null) { // id check just to set up canDrop = false
          const boardSquare = board[hoveredY][hoveredX];

          if(board[hoveredY][hoveredX].id !== item.id) {
            canDrop = false;
          }

          const isAllowToStack = boardSquare.name === item.name
            && boardSquare.mainCell !== item.mainCell
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
    // --------------------------------------------------------------------------------------------------
    // --------------------------------------- If equipped hovered --------------------------------------
    else {
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
        // check if required cell already has another item
        const isAllowToStack = equippedSquareItem.name === item.name
          && equippedSquareItem.mainCell !== item.mainCell
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
    // --------------------------------------------------------------------------------------------------

    if (stackableItem) {
      // similar dispatch, but with canDrop === true
      const goingToStack: GoingToStack = {
        stackableItem,
        stackableItemNewCurrentCount,
        draggedItemNewCurrentCount
      }
      dispatch(_setHoveredSquares(hoveredSquare, allHoveredSquares, canDrop = true, isHoveredEquipped,
        goingToStack));
    } else {
      dispatch(_setHoveredSquares(hoveredSquare, allHoveredSquares, canDrop, isHoveredEquipped));
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
    // distinct action for stack (invoke in SquareCommonItem and SquareEquippedItem on mouse up
    const
      {
        item: draggedItem,
        goingToStack: {stackableItem, stackableItemNewCurrentCount, draggedItemNewCurrentCount}
      } = getState().draggedItem;

    const _getItemSquares = (mainCell, width, height) => {
      const allItemSquares = [];
      for (let y = mainCell[1]; y < mainCell[1] + height; y++) {
        for (let x = mainCell[0]; x < mainCell[0] + width; x++) {
          allItemSquares.push([x, y]);
        }
      }
      return allItemSquares;
    }

    const _stackToBoard = () => {
      const allItemSquares = _getItemSquares(stackableItem.mainCell, stackableItem.width, stackableItem.height);
      dispatch(boardChangeCurrentCount(allItemSquares, stackableItemNewCurrentCount));
    }

    // ------------------------------------- If stack from board -------------------------------------
    // fill droppable, then work with dragged
    if (typeof draggedItem.mainCell === 'object') {

      // add item to board / equipped depend on conditions
      // ------------------------------------- If stack to board (from board) ------------------------
      if (typeof stackableItem.mainCell === 'object') {
        // stack to board (from board)
        _stackToBoard();
      }
        //------------------------------------------------------------------------------------------------
      // ------------------------------------- If stack to equipped (from board) -------------------------
      else {
        // stack to equipped (from board)
        console.log('stack to eq from board', stackableItem, stackableItemNewCurrentCount, draggedItemNewCurrentCount);
        dispatch(equippedChangeCurrentCount(stackableItem.mainCell, stackableItemNewCurrentCount));
      }
      //-------------------------------------------------------------------------------------------------

      // or remove item or just change currentCount
      if (draggedItemNewCurrentCount === 0) {
        // remove item
        if(!fromSplit) {
          dispatch(removeItem(draggedItem.mainCell, draggedItem.width, draggedItem.height));
          //change draggedItem position to droppable to send to server?
          draggedItem.mainCell = stackableItem.mainCell;
        }

      } else if (draggedItemNewCurrentCount > 0) {
        console.log('draggedItemNewCurrentCount > 0');
        if(!fromSplit) {
          const allItemSquares = _getItemSquares(draggedItem.mainCell, draggedItem.width, draggedItem.height);
          dispatch(boardChangeCurrentCount(allItemSquares, draggedItemNewCurrentCount));
          // to server
          draggedItem.currentCount = draggedItemNewCurrentCount;
        }
      }
    }
    //------------------------------------------------------------------------------------------------------
    //-------------------------------------If stack from equipped items-------------------------------------
    else {
      // stack from equipped inv
      if (typeof stackableItem.mainCell === 'object') {
        // stack to board (from equipped inv)
        _stackToBoard();

      } else {
        // stack to equipped (from equipped inv)
        dispatch(equippedChangeCurrentCount(stackableItem.mainCell, stackableItemNewCurrentCount));
      }

      // or remove item or just change currentCount
      if (draggedItemNewCurrentCount === 0) {
        // remove item
        if(!fromSplit) {
          dispatch(removeEquippedItem(draggedItem.mainCell));
        }
        // to server
        draggedItem.mainCell = stackableItem.mainCell;
      } else if (draggedItemNewCurrentCount > 0) {
        dispatch(equippedChangeCurrentCount(draggedItem.mainCell, draggedItemNewCurrentCount));
      }
    }
    //------------------------------------------------------------------------------------------------------

    if(!fromSplit) {
      draggedItem.currentCount = draggedItemNewCurrentCount;
      stackableItem.currentCount = stackableItemNewCurrentCount;
    }

    // todo change current count
    const translatedToServerDraggedItem = translateToServerItem(draggedItem);
    const translatedToServerStackableItem = translateToServerItem(stackableItem);
    try {
      //@ts-ignore
      mp.trigger('cel_cf_stackItem', translatedToServerDraggedItem, translatedToServerStackableItem);
    } catch (e) {}
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

    dispatch(draggedItemRelease());

    oldDraggedItem.isRotated = !oldDraggedItem.isRotated;

    // visual rotate dragged image
    const draggedItem = document.getElementById('curr-dragged-item');

    if (oldDraggedItem.isRotated) {
      draggedItem.style.transform = 'rotate(90deg)';
    } else {
      draggedItem.style.transform = 'none';
    }
    //------------------------------------------------------

    if (oldDraggedItemInfo.hoveredSquare && typeof oldDraggedItemInfo.hoveredSquare === 'object') {
      oldDraggedItem.mainCell = [oldDraggedItemInfo.hoveredSquare[0] - oldDraggedItemInfo.yDown,
                                oldDraggedItemInfo.hoveredSquare[1] - oldDraggedItemInfo.xDown]
      dispatch(addDraggedItem({...oldDraggedItem}, oldDraggedItemInfo.hoveredSquare, true));
    } else {
      dispatch(addDraggedItem({...oldDraggedItem}, [-100, -100], true, oldDraggedItemInfo.hoveredSquare));
    }
  }
}


export {
  addDraggedItem,
  draggedItemRelease,
  setHoveredSquares,
  invokeOnMouseUp,
  stackItem,
  setGoingToDrop,
  hoveredSquaresRemove,
  rotateItem
}