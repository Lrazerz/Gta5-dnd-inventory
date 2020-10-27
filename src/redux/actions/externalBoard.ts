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

const openExternalBoard = async (info) => {

  const externalBoardItems = [];

  const parsedInfo = JSON.parse(info);

  const values = parsedInfo.values;
  const boardSizeX = parsedInfo.BoardSizeX;
  const boardSizeY = parsedInfo.BoardSizeY;

  for(let i = 0; i < values.length; i++) {
    // map through every item and add to corresponding array
    // item - single item with its own sizes
    const item = values[i];

    // Square numbers starts from 1 instead of 0
    let {
      Name, PosNumberLeftAngle, SizeX, SizeY, Enabled, CurrentCount, MaxCount, IsRotated, ...rest
    } = item;
    const ID = item.ID.toString();

    //region ------------------------------ Import image ------------------------------

    let ImageUrl = await importItemImage(Name);

    if(ImageUrl) {
      ImageUrl = ImageUrl.default;
    } else {
      ImageUrl = DummyImage;
    }
    //endregion

    const category: ItemCategories | string = item.Category.toLowerCase();

    let FullItem: Item;

    if(IsRotated) {
      // swap width and height
      const tmp = SizeX;
      SizeX = SizeY;
      SizeY = tmp;
    }

    FullItem = new Item(ID, Name, category, PosNumberLeftAngle,
      SizeY, SizeX, CurrentCount, MaxCount,
      ImageUrl, Enabled, IsRotated, rest);

    const mainCellY = Math.floor(PosNumberLeftAngle / (xMax + 1));
    const mainCellX = PosNumberLeftAngle % (xMax + 1) - 1;

    const filledSquares: [[number, number]] | [] = [];

    for (let i = mainCellX; i < mainCellX + SizeX; i++) {
      for (let j = mainCellY; j < mainCellY + SizeY; j++) {
        // @ts-ignore
        filledSquares.push([i, j]);
      }
    }

    FullItem.mainCell = [mainCellX, mainCellY];

    externalBoardItems.push({...FullItem, squares: filledSquares});

  }

  // make new board
  const newBoard = [];

  for(let y = 0; y < boardSizeY; y++) {
    newBoard.push([]);
    for(let x = 0; x < boardSizeX; x++) {
      newBoard[y][x] = null;
    }
  }

  externalBoardItems.forEach(itemAndSquares => {
    const {squares, ...itemProps} = itemAndSquares;
    squares.forEach(square => {
      newBoard[square[1]][square[0]] = {
        ...itemProps
      };
    });
  });

  return {type: OPEN_EXTERNAL_BOARD, newBoard};
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