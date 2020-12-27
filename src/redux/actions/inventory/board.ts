import {
  BOARD_ALL_ITEMS_RELEASE,
  BOARD_CURRENT_COUNT_CHANGE, BOARD_SET_SQUARE_SIZE,
  EQUIPPED_STATE_CHANGE,
  SINGLE_ITEM_SQUARES_FILL,
  SQUARES_FILL,
  SQUARES_RELEASE
} from "./types";
import {xMax, xMin, yMax, yMin} from "../../../inventory/constants/boardDimensions";
import ItemModel from "../../../inventory/models/ItemModel";
import {mpTriggerMoveFromExternalItem, mpTriggerMoveItem} from "../../../utils/mpTriggers/inventory/mpTriggers";

// _addItems: 1. check every item from derived, find on board and check all props on equality; 2. check all board items
// and if there is additional items - isAnyChanges = true and set all arrived items except checked items

const addItems = (items: ItemModel[]) => {
    return {type: SQUARES_FILL, items};
}

const _removeItem = (coordsArr) => {
  return {type: SQUARES_RELEASE, squares: coordsArr};
}

const _changeEquippedState = (squares, item) => {
  return {type: EQUIPPED_STATE_CHANGE, squares, item};
}

const _releaseAllItems = () => {
  return {type: BOARD_ALL_ITEMS_RELEASE};
}

const setSquareSize = (squareSize) => {
  return {type: BOARD_SET_SQUARE_SIZE, size: squareSize};
}

const addItemBySquares = (squares, item: ItemModel) => {
  return {type: SINGLE_ITEM_SQUARES_FILL, squares, item};
}

// add item fetched from draggedItem
const addItem = () => {
  return (dispatch, getState) => {
    const {hoveredSquare, allHoveredSquares, xDown, yDown, item: draggedItem, draggedItemArea} = getState().inventory.draggedItem;

    const newDraggedItem = {...draggedItem};

    newDraggedItem.mainCell = [hoveredSquare[0] - xDown, hoveredSquare[1] - yDown];

    if(draggedItemArea !== 1) {
      newDraggedItem.isWeaponEquipped = false;
     }

    dispatch(addItemBySquares(allHoveredSquares, newDraggedItem));

    if(draggedItemArea === 2) {
      mpTriggerMoveFromExternalItem(newDraggedItem);
    } else if (draggedItemArea === 1 || draggedItemArea === 3) {
      mpTriggerMoveItem(newDraggedItem);
    }
  }
}

// mainCell, width, height
const removeItem = ([x, y], width = 1, height = 1) => {
  return dispatch => {
    // more precisely "squares to remove"
    const itemsToRemove = [];
    for (let currX = x; currX < x + width; currX++) {
      for (let currY = y; currY < y + height; currY++) {
        itemsToRemove.push([currX, currY]);
      }
    }

    dispatch(_removeItem(itemsToRemove));
  }
}

const removeItemFromBoard = (id) => {
  return (dispatch, getState) => {
    const {board} = getState().inventory.board;

    const squaresToRemove = [];

    for(let y = yMin; y <= yMax; y++) {
      for(let x = xMin; x <= xMax; x++) {
        if(board[y][x] && board[y][x].id === id) {
          squaresToRemove.push([x,y]);
        }
      }
    }

    dispatch(_removeItem(squaresToRemove));
  }
}

const changeEquippedState = (item, newState) => dispatch => {
  // invoke only in SquareCommonItem
  const newItem = {...item};
  // newState === isWeaponEquipped
  const squares = [];

  newItem.isWeaponEquipped = newState;

  if(newItem.isRotated) {
    const tmp = newItem.width;
    newItem.width = newItem.height;
    newItem.height = tmp;
  }

  for(let y = newItem.mainCell[1]; y < newItem.mainCell[1] + newItem.height; y++) {
    for(let x = newItem.mainCell[0]; x < newItem.mainCell[0] + newItem.width; x++) {
      squares.push([x,y]);
    }
  }
  dispatch(_changeEquippedState(squares, newItem));
}

const boardChangeCurrentCountByItemId = (id, newCurrentCount) => {
  return (dispatch, getState) => {
    const boardCells = getState().inventory.board.board;

    const requiredCells = [];

    boardCells.forEach((row, yPos) => {
      row.forEach((item, xPos) => {
        if(item && item.id === id) {
          requiredCells.push([xPos, yPos]);
        }
      });
    });

    if(newCurrentCount === 0) {
      dispatch(_removeItem(requiredCells));
    } else {
      dispatch({type: BOARD_CURRENT_COUNT_CHANGE, squares: requiredCells, newCurrentCount});
    }
  }
}

export {
  addItems,
  addItem,
  // to rotate non-dragged item
  addItemBySquares,
  removeItem,
  changeEquippedState,
  removeItemFromBoard,
  boardChangeCurrentCountByItemId,
  setSquareSize
}