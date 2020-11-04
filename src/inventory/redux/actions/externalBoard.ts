import {
  CLOSE_EXTERNAL_BOARD, EXTERNAL_BOARD_CURRENT_COUNT_CHANGE,
  EXTERNAL_ITEM_SQUARES_RELEASE,
  OPEN_EXTERNAL_BOARD, SINGLE_EXTERNAL_ITEM_SQUARES_FILL
} from "./types";
import {xMax, xMin, yMin} from "../../constants/boardDimensions";
import {
  mpTriggerMoveFromExternalToExternalItem,
  mpTriggerMoveToExternalItem
} from "../../utils/mpTriggers";

const openExternalBoard = (items, height) => {
  return {type: OPEN_EXTERNAL_BOARD, items, height};
}

const closeExternalBoard = () => {
  return {type: CLOSE_EXTERNAL_BOARD};
}

const _removeExternalItem = (squares) => {
  return {type: EXTERNAL_ITEM_SQUARES_RELEASE, squares};
}

const addExternalItemsBySquares = (squares, item) => {
  return {type: SINGLE_EXTERNAL_ITEM_SQUARES_FILL, squares, item};
}

const addExternalBoardItem = () => {
  return (dispatch, getState) => {
    const {hoveredSquare, allHoveredSquares, xDown, yDown, item: draggedItem, draggedItemArea} = getState().draggedItem;

    const newDraggedItem = {...draggedItem};

    newDraggedItem.mainCell = [hoveredSquare[0] - xDown, hoveredSquare[1] - yDown];

    if(draggedItemArea !== 2) {
      // if item derived from eq items and it is weapon (isWeaponEquipped can be true only on weapons)
      newDraggedItem.isWeaponEquipped = false;
    }

    dispatch(addExternalItemsBySquares(allHoveredSquares, newDraggedItem));
    if(draggedItemArea === 2) {
      mpTriggerMoveFromExternalToExternalItem(newDraggedItem);
    } else {
      mpTriggerMoveToExternalItem(newDraggedItem);
    }
  }
}

const removeExternalBoardItem = ([x,y],width = 1,height = 1) => {
  return dispatch => {
    // or "squares to remove"
    const itemsToRemove = [];
    for (let currX = x; currX < x + width; currX++) {
      for (let currY = y; currY < y + height; currY++) {
        itemsToRemove.push([currX, currY]);
      }
    }

    dispatch(_removeExternalItem(itemsToRemove));
  }
}

const removeExternalBoardItemById = (itemId) => {
  return (dispatch, getState) => {
    const {externalBoard} = getState().externalBoard;

    const squaresToRemove = [];

    for(let y = yMin; y < externalBoard.length; y++) {
      for(let x = xMin; x <= xMax; x++) {
        if(externalBoard[y][x] && externalBoard[y][x].id === itemId) {
          squaresToRemove.push([x,y]);
        }
      }
    }

    dispatch(_removeExternalItem(squaresToRemove));
  }
}

const externalBoardChangeCurrentCountByItemId = (id, newCurrentCount) => {
  return (dispatch, getState) => {
    const externalBoardCells = getState().externalBoard.externalBoard;

    const requiredCells = [];

    externalBoardCells.forEach((row, yPos) => {
      row.forEach((item, xPos) => {
        if(item && item.id === id) {
          requiredCells.push([xPos, yPos]);
        }
      });
    });

    if(newCurrentCount === 0) {
      dispatch(_removeExternalItem(requiredCells));
    } else {
      dispatch({type: EXTERNAL_BOARD_CURRENT_COUNT_CHANGE, squares: requiredCells, newCurrentCount});
    }
  }
}

export {openExternalBoard, closeExternalBoard,
  addExternalBoardItem, addExternalItemsBySquares,
  removeExternalBoardItem, removeExternalBoardItemById,
  externalBoardChangeCurrentCountByItemId};