import {
  BOARD_CURRENT_COUNT_CHANGE,
  CLOSE_EXTERNAL_BOARD, EXTERNAL_BOARD_CURRENT_COUNT_CHANGE,
  EXTERNAL_ITEM_SQUARES_RELEASE,
  OPEN_EXTERNAL_BOARD, SINGLE_EXTERNAL_ITEM_SQUARES_FILL,
  SINGLE_ITEM_SQUARES_FILL
} from "./types";
import {importItemImage} from "./board";
// @ts-ignore
import DummyImage from "../../assets/dummy/weapon.png";
import {ItemCategories} from "../../constants/dnd/categories";
import Item from "../../models/Item";
import {xMax, xMin, yMax, yMin} from "../../constants/boardDimensions";
import {translateToServerItem} from "../../utils/translateToServerItem";

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
    const {hoveredSquare, allHoveredSquares, xDown, yDown, item: draggedItem} = getState().draggedItem;

    const newDraggedItem = {...draggedItem};

    newDraggedItem.mainCell = [hoveredSquare[0] - xDown, hoveredSquare[1] - yDown];

    newDraggedItem.isEquipped = false;

    // if(typeof hoveredSquare === 'number' && newDraggedItem.isWeaponEquipped) {
    //   // if item derived from eq items and it is weapon (isWeaponEquipped can be true only on weapons)
    //   newDraggedItem.isWeaponEquipped = false;
    // }

    dispatch(addExternalItemsBySquares(allHoveredSquares, newDraggedItem));
    // translate to Server Item
    // const itemToServer = translateToServerItem(newDraggedItem);
    //@ts-ignore
    // mp.trigger('cef_cl_moveItem', itemToServer);
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

    for(let y = 0; y <= externalBoard.length - 1; y++) {
      for(let x = 0; x <= xMax; x++) {
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
      return _removeExternalItem(requiredCells);
    }
    dispatch({type: EXTERNAL_BOARD_CURRENT_COUNT_CHANGE, squares: requiredCells, newCurrentCount});
  }
}

export {openExternalBoard, closeExternalBoard,
  addExternalBoardItem, addExternalItemsBySquares,
  removeExternalBoardItem, removeExternalBoardItemById,
  externalBoardChangeCurrentCountByItemId};