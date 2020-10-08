import {
  DRAGGED_ITEM_SET,
  HOVERED_SQUARES_SET,
  DRAGGED_ITEM_RELEASE,
  GOING_TO_DROP_SET
} from "./types";
import {xMin, xMax, yMin, yMax} from "../../constants/boardDimensions";
import Item from "../../models/Item";
import {GoingToStack} from "../reducers/draggedItem";
import {boardChangeCurrentCount, removeItem} from "./board";
import {equippedChangeCurrentCount, removeEquippedItem} from "./equippedItems";

const _addDraggedItem = (item, xUp, xDown, yUp, yDown) => {
  return {type: DRAGGED_ITEM_SET, item, xUp, xDown, yUp, yDown};
};

const _setHoveredSquares = (squareCoords, allHoveredSquares, canDrop, isHoveredEquipped, goingToStack = null) => {
  return {
    type: HOVERED_SQUARES_SET, square: squareCoords, squares: allHoveredSquares, canDrop,
    isHoveredEquipped: isHoveredEquipped, goingToStack
  };
};

const _setGoingToDrop = (newState, canDrop) => {
  return {type: GOING_TO_DROP_SET, goingToDrop: newState, canDrop};
}

const draggedItemRelease = () => {
  return {type: DRAGGED_ITEM_RELEASE};
};

const addDraggedItem = ([x, y], item) => {
  return dispatch => {
    let xUp, yUp, xDown, yDown, xAver, yAver;

    if (!item.isEquipped) {
      const [mainCellX, mainCellY] = item.mainCell;

      // average X and Y for aligning
      if (item.width % 2 === 0) {
        xAver = mainCellX + item.width / 2 - 1;
      } else {
        xAver = mainCellX + Math.floor(item.width / 2);
      }

      if (item.height % 2 === 0) {
        yAver = mainCellY + item.height / 2 - 1;
      } else {
        yAver = mainCellY + Math.floor(item.height / 2);
      }

      xUp = mainCellX + item.width - 1 - xAver;
      xDown = xAver - mainCellX;

      yUp = mainCellY + item.height - 1 - yAver;
      yDown = yAver - mainCellY;

      // set hovered squares
      const hoveredSquares = [];

      for (let i = x - xDown; i <= x + xUp; i++) {
        for (let j = y - yDown; j <= y + yUp; j++) {
          hoveredSquares.push([i, j]);
        }
      }

      dispatch(_addDraggedItem(item, xUp, xDown, yUp, yDown));
      dispatch(_setHoveredSquares([x, y], hoveredSquares, true, false));
    } else {
      // item is equipped
      if (item.width % 2 === 0) {
        xUp = item.width / 2;
        xDown = item.width / 2 - 1;
      } else {
        xUp = Math.floor(item.width / 2);
        xDown = Math.floor(item.width / 2);
      }

      if (item.height % 2 === 0) {
        yUp = item.height / 2;
        yDown = item.height / 2 - 1;
      } else {
        yUp = Math.floor(item.height / 2);
        yDown = Math.floor(item.height / 2);
      }

      dispatch(_addDraggedItem(item, xUp, xDown, yUp, yDown));
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

const setHoveredSquares = (hoveredSquare, isHoveredEquipped = false, allowedCategory = null) => {
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

    if (!isHoveredEquipped) {
      // if board hovered (the same except check allHoveredSquares)
      allHoveredSquares = __fillHoveredSquares(hoveredSquare, xDown, yDown, xUp, yUp);
      // check canDrop
      allHoveredSquares.forEach(hoveredSquare => {
        const [hoveredX, hoveredY] = hoveredSquare;
        const boardSquare = board[hoveredY][hoveredX];
        // if outside the border
        if (hoveredX < xMin || hoveredX > xMax || hoveredY < yMin || hoveredY > yMax) {
          canDrop = false;
          // if has item on board and item is not the dragged item
        }
        else if (boardSquare !== null && boardSquare.id !== item.id) { // id check just to set up canDrop = false
          canDrop = false;
          // can check "allow to stack" here coz all items has different id's
          const isAllowToStack = boardSquare.name === item.name
            && boardSquare.currentCount && boardSquare.maxCount
            && boardSquare.currentCount < boardSquare.maxCount;
          if (isAllowToStack) {
            stackableItem = boardSquare;

            // drag item from board (to board) and allowToStack === true
            if (stackableItem.maxCount >= stackableItem.currentCount + item.currentCount) {
              // if can stack full draggedItem
              stackableItemNewCurrentCount = stackableItem.currentCount + item.currentCount;
              draggedItemNewCurrentCount = 0;
            }
            else if (stackableItem.maxCount < stackableItem.currentCount + item.currentCount) {
              // can stack only part of draggedItem
              stackableItemNewCurrentCount = stackableItem.maxCount;
              draggedItemNewCurrentCount = stackableItem.maxCount - stackableItem.currentCount;
            }
          }
        }
      });
    }
    else {
      // if equipped inventory hovered
      const equippedSquareItem = equippedCells[hoveredSquare].item; // stackable square
      if (allowedCategory !== item.category) {
        //check category
        canDrop = false;
      }
      else if (equippedSquareItem !== null && equippedSquareItem.id !== item.id) {
        canDrop = false;
        // check if required cell already has another item
        const isAllowToStack = equippedSquareItem.name === item.name
          && equippedSquareItem.currentCount && equippedSquareItem.maxCount
          && equippedSquareItem.currentCount < equippedSquareItem.maxCount;

        if(isAllowToStack) {
          stackableItem = equippedSquareItem;
          // no matter dragged from board or equipped to equipped
          if (equippedSquareItem.maxCount >= equippedSquareItem.currentCount + item.currentCount) {
            // can stack full item
            stackableItemNewCurrentCount = equippedSquareItem.currentCount + item.currentCount;
            draggedItemNewCurrentCount = 0;
          } else if (equippedSquareItem.maxCount < equippedSquareItem.currentCount + item.currentCount) {
            // can't stack full item
            stackableItemNewCurrentCount = equippedSquareItem.maxCount;
            draggedItemNewCurrentCount = equippedSquareItem.maxCount - equippedSquareItem.currentCount;
          }
        }
      }
    }

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

const stackItem = () => {
  return (dispatch, getState) => {
    // distinct action for stack (invoke in SquareCommonItem and SquareEquippedItem on mouse up
    // if draggedItem.goingToStack !== null)
    const
      {
        item: draggedItem,
        goingToStack: {stackableItem, stackableItemNewCurrentCount, draggedItemNewCurrentCount}
      } = getState().draggedItem;

    const _getItemSquares = (mainCell, width, height) => {
      const allItemSquares = [];
      for(let y = mainCell[1]; y < mainCell[1] + height; y++) {
        for(let x = mainCell[0]; x < mainCell[0] + width; x++) {
          allItemSquares.push([x,y]);
        }
      }
      return allItemSquares;
    }

    const _stackToBoard = () => {
      const allItemSquares = _getItemSquares(stackableItem.mainCell, stackableItem.width, stackableItem.height);
      dispatch(boardChangeCurrentCount(allItemSquares, stackableItemNewCurrentCount));
    }

    if(typeof draggedItem.mainCell === 'object') {
      // stack from board

      // add item to board / equipped depend on conditions
      if (typeof stackableItem.mainCell === 'object') {
        // stack to board (from board)
        _stackToBoard();
      }
      else {
        // stack to equipped (from board)
        dispatch(equippedChangeCurrentCount(stackableItem.mainCell,stackableItemNewCurrentCount));
      }

      // or remove item or just change currentCount
      if(draggedItemNewCurrentCount === 0) {
        // remove item
        dispatch(removeItem(draggedItem.mainCell, draggedItem.width, draggedItem.height));
      } else if(draggedItemNewCurrentCount > 0) {
        const allItemSquares = _getItemSquares(draggedItem.mainCell, draggedItem.width, draggedItem.height);
        dispatch(boardChangeCurrentCount(allItemSquares, draggedItemNewCurrentCount));
      }
    }
    else {
      // stack from equipped inv
      if(typeof stackableItem.mainCell === 'object') {
        // stack to board (from equipped inv)
        _stackToBoard();
      }
      else {
        // stack to equipped (from equipped inv)
        console.log('Actions draggedItem mainCell stackable', stackableItem.mainCell);
        dispatch(equippedChangeCurrentCount(stackableItem.mainCell,stackableItemNewCurrentCount));
      }

      // or remove item or just change currentCount
      if(draggedItemNewCurrentCount === 0) {
        // remove item
        dispatch(removeEquippedItem(draggedItem.mainCell));
      } else if(draggedItemNewCurrentCount > 0) {
        dispatch(equippedChangeCurrentCount(draggedItem.mainCell, draggedItemNewCurrentCount));
      }
    }
  }
}

const setGoingToDrop = (newState) => {
  return dispatch => {
    // todo limit on clothes
    const canDrop = newState;
    dispatch(_setGoingToDrop(newState, canDrop));
  }
}


export {
  addDraggedItem,
  draggedItemRelease,
  setHoveredSquares,
  invokeOnMouseUp,
  stackItem,
  setGoingToDrop
}