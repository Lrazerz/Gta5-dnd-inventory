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
import {
  addItem,
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
import {translateToServerItem} from "../../utils/translateToServerItem";
import {EquippedCategoriesToCells} from "../../constants/dnd/equippedCategoriesToCells";
import {ItemTypes} from "../../constants/dnd/types";
import {mpTriggerDropItem} from "./contextMenu";

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

// need to know item, x,y - hoveredSquare, if came from board, fromRotate to
// hoveredSquareIfEquippedHovered means that item is rotating equippedInv was hovered
const addDraggedItem = (item, [x, y] = [-100, -100], fromRotate = false,
                        hoveredSquareIfEquippedHovered = null, goingToDropAreaId = null) => {
  return dispatch => {
    let xUp, yUp, xDown, yDown;

    //region ------------------------------ To check if item is rotating ------------------------------
    let itemWidth = item.width;
    let itemHeight = item.height;

    if (item.isRotated) {
      itemWidth = item.height;
      itemHeight = item.width;
    }
    //endregion

    //region ------------------------------ Utils (set offsets) ------------------------------
    let setItemOffsets: () => void;
    setItemOffsets = () => {

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
    }
    //endregion
    setItemOffsets();

    //region ------------------------------ If item from the board ------------------------------
    if (!item.isEquipped) {

      //region ------------------------------ Find hovered squares ------------------------------
      const hoveredSquares = [];

      for (let i = x - xDown; i <= x + xUp; i++) {
        for (let j = y - yDown; j <= y + yUp; j++) {
          hoveredSquares.push([i, j]);
        }
      }
      //endregion
      // just add draggedItem (from board)
      dispatch(_addDraggedItem({...item}, xUp, xDown, yUp, yDown));
      // last-remove
      // if (x !== -100 && !fromRotate) {
      //   dispatch(_setHoveredSquares([x, y], hoveredSquares, true, false));
      // }
    }
    //endregion

    //region ------------------------------ If item from the equipped ------------------------------
    else {
      dispatch(_addDraggedItem({...item}, xUp, xDown, yUp, yDown));
      if (!fromRotate) {
        dispatch(setHoveredSquares(item.mainCell, true));
      }
    }
    //endregion

    //region ------------------------------ If from rotate set hoveredSq and canDrop etc ------------------------------

    // if was goingToDrop - save it
    if(fromRotate && goingToDropAreaId) {
      dispatch(_setGoingToDrop(true, true, goingToDropAreaId));
    }
    // setHoveredSquare on board
    else if (fromRotate && !hoveredSquareIfEquippedHovered) {
      dispatch(setHoveredSquares([x, y], false));
    }
    // setHoveredSquare on equipped
    else if(hoveredSquareIfEquippedHovered) {
      dispatch(setHoveredSquares(hoveredSquareIfEquippedHovered, true));
    }
    //endregion
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

    //region ------------------------------ If board hovered ------------------------------
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

          // mainCells is not equal
          const isAllowToStack = boardSquare.name === item.name
            && boardSquare.mainCell !== item.mainCell
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
    //endregion

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
    // distinct action for stack (invoke in SquareCommonItem and SquareEquippedItem and RangeComponent on mouse up
    const
      {
        draggedItem: {
          item: draggedItem,
          goingToStack: {stackableItem, stackableItemNewCurrentCount, draggedItemNewCurrentCount}
        }
      } = getState();

    //region ------------------------------ Utils ------------------------------
    const _stackToBoard = () => {
      dispatch(boardChangeCurrentCountByItemId(stackableItem.id, stackableItemNewCurrentCount));
    }
    //endregion

    //region ------------------------------------- If stack from board -------------------------------------
    // fill droppable, then work with dragged
    if (typeof draggedItem.mainCell === 'object') {

      //region ------------------------------------- If stack to board (from board) ------------------------
      if (typeof stackableItem.mainCell === 'object') {
        // stack to board (from board)
        _stackToBoard();
      }
      //endregion
      //region ------------------------------------- If stack to equipped (from board) -------------------------
      else {
        // stack to equipped (from board)
        dispatch(equippedChangeCurrentCount(stackableItem.mainCell, stackableItemNewCurrentCount));
      }
      //endregion

      //region ------------------------------ DraggedItem change currCount ------------------------------
      if (draggedItemNewCurrentCount === 0) {
        // remove item
        if(!fromSplit) {
          dispatch(removeItemFromBoard(draggedItem.id));
          //change draggedItem position to droppable to send to server?
          draggedItem.mainCell = stackableItem.mainCell;
        }
      } else if (draggedItemNewCurrentCount > 0) {
        if(!fromSplit) {
          // change here too
          // need to know all squaresOnBoard
          dispatch(boardChangeCurrentCountByItemId(draggedItem.id, draggedItemNewCurrentCount));
          // to server
          draggedItem.currentCount = draggedItemNewCurrentCount;
        }
      }
      //endregion
    }
  //endregion
    //region -------------------------------------If stack from equipped items------------------------------
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
    //endregion

    if(!fromSplit) {
      draggedItem.currentCount = draggedItemNewCurrentCount;
      stackableItem.currentCount = stackableItemNewCurrentCount;
    }

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


    // if goingToDrop ?) (if goingToDrop hoveredSquare sets to null

    //region ------------------------------ Save goingToDrop ------------------------------
    console.log('goingToDorp', oldDraggedItemInfo.goingToDrop);
    if(oldDraggedItemInfo.goingToDrop) {
      dispatch(addDraggedItem({...oldDraggedItem}, [-100,-100], true, null, oldDraggedItemInfo.goingToDrop.areaId));
    }
    //endregion
    else if (oldDraggedItemInfo.hoveredSquare && typeof oldDraggedItemInfo.hoveredSquare === 'object') {
      // oldDraggedItem.mainCell = [oldDraggedItemInfo.hoveredSquare[0] - oldDraggedItemInfo.yDown,
      //                           oldDraggedItemInfo.hoveredSquare[1] - oldDraggedItemInfo.xDown]
      dispatch(addDraggedItem({...oldDraggedItem}, oldDraggedItemInfo.hoveredSquare, true));
    } else {
      dispatch(addDraggedItem({...oldDraggedItem}, [-100, -100], true, oldDraggedItemInfo.hoveredSquare));
    }
  }
}

const dragEndHandler = () => {
  return async (dispatch, getState) => {
    const {canDrop, goingToStack, goingToDrop, item: draggedItem, hoveredSquare, xDown, yDown} = getState().draggedItem;

    if (canDrop) {
      if(goingToStack) {
        await dispatch(stackItem());
      }
      else if (goingToDrop) {
        // already have no hovered squares
        if (typeof draggedItem.mainCell === 'object') {
          // if drop item from board
          if (draggedItem.category === ItemTypes.WEAPON_RIFLE || draggedItem.category === ItemTypes.WEAPON_PISTOL
            || draggedItem.category === ItemTypes.WEAPON_LAUNCHER) {
            await dispatch(removeEquippedWeaponFromEquipped(draggedItem.id));
          }
          // @ts-ignore
          await dispatch(removeItem(draggedItem.mainCell, draggedItem.width, draggedItem.height));
        } else {
          // drop item from equipped
          if (draggedItem.category === ItemTypes.WEAPON_RIFLE || draggedItem.category === ItemTypes.WEAPON_PISTOL
            || draggedItem.category === ItemTypes.WEAPON_LAUNCHER) {
            await dispatch(removeItemFromBoard(draggedItem.id));
          }
          // @ts-ignore
          await dispatch(removeEquippedItem(draggedItem.mainCell));
        }
        mpTriggerDropItem(draggedItem);
      }
      else if (typeof hoveredSquare === 'number') {
        // if add to equipped
        if (draggedItem.category === ItemTypes.WEAPON_RIFLE || draggedItem.category === ItemTypes.WEAPON_PISTOL
          || draggedItem.category === ItemTypes.WEAPON_LAUNCHER) {
          // if weapon make transparent color
          await dispatch(changeEquippedState(draggedItem, true));
        } else {
          await dispatch(removeItemFromBoard(draggedItem.id));
        }
        try {
          await dispatch(setEquippedItem(hoveredSquare));
        } catch (e) {}
      }
      else {
        // add to board (from board too)
        // if (draggedItem.mainCell[0] !== hoveredSquare[0] - xDown || draggedItem.mainCell[1] !== hoveredSquare[1] - yDown) {
          // check if this is not the current item square
          await dispatch(removeItemFromBoard(draggedItem.id));
          try {
            dispatch(addItem());
          } catch (e) {
          }
        // }
      }
    }
    await dispatch(draggedItemRelease());
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
  rotateItem,
  dragEndHandler
}