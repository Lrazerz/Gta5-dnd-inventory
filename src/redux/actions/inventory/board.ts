import {
  BOARD_ALL_ITEMS_RELEASE,
  BOARD_CURRENT_COUNT_CHANGE, BOARD_SET_SQUARE_SIZE,
  EQUIPPED_STATE_CHANGE,
  SINGLE_ITEM_SQUARES_FILL,
  SQUARES_FILL,
  SQUARES_RELEASE
} from "./types";
import store from "../../store";
import {setEquippedItems} from "./equippedItems";
import {ItemCategories} from "../../../inventory/constants/dnd/categories";
import {xMax, xMin, yMax, yMin} from "../../../inventory/constants/boardDimensions";
import Item from "../../../inventory/models/Item";
import DummyImage from '../../../assets/inventory/dummy/weapon.png';
import {closeExternalBoard, openExternalBoard} from "./externalBoard";
import {mpTriggerMoveFromExternalItem, mpTriggerMoveItem} from "../../../utils/mpTriggers/inventory/mpTriggers";

const importItemImage: (itemName: string) => Promise<any> = async (itemName) => {
  let imageUrl;
  try {
    imageUrl = await import(`../../../assets/inventory/images/items/${itemName.toLowerCase()}.svg`);
    return imageUrl;
  } catch (e) {
    if(e.code === 'MODULE_NOT_FOUND') {
      console.log(`image for "${itemName}" not found, using default image.`)
    } else {
      console.log('error while importing image');
    }
  }
}

let _getEnabledAndBoardItems: (items: any[]) => Promise<{boardItems: Item[], enabledItems: Item[]}>;
_getEnabledAndBoardItems = async (items) => {
  const enabledItems = [];
  const boardItems = [];

  for(const propName in items) {
    // map through every item and add to corresponding array
    // item - single item with its own sizes
    const item = items[propName];

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
      SizeX, SizeY, CurrentCount, MaxCount,
      ImageUrl, IsRotated, rest);


    if (Enabled === true) {
      enabledItems.push(FullItem);
    }
    else {
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

      boardItems.push({...FullItem, squares: filledSquares});
    }
  }

  return {boardItems, enabledItems};
};

let _getExternalBoardItems: (items: any[]) => Promise<{externalBoardItems: Item[]}>;
_getExternalBoardItems = async (items) => {
  const externalBoardItems = [];

  for(const propName in items) {
    // map through every item and add to corresponding array
    // item - single item with its own sizes
    const item = items[propName];

    // Square numbers starts from 1 instead of 0
    let {
      Name, PosNumberLeftAngle, SizeX, SizeY, Enabled = false, CurrentCount, MaxCount, IsRotated, ...rest
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
      SizeX, SizeY, CurrentCount, MaxCount,
      ImageUrl, IsRotated, rest);

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

  return {externalBoardItems};
}

const openOrRefreshInventory = async (info) => {
  const values = JSON.parse(info).$values;

  const {boardItems, enabledItems} = await _getEnabledAndBoardItems(values);

  store.dispatch(closeExternalBoard());
  // @ts-ignore
  store.dispatch(_addItems(boardItems));
  // @ts-ignore
  store.dispatch(setEquippedItems(enabledItems));
}

const  openDoubleInventory = async (info, externalInfo, externalBoardHeight) => {
  const {$values: values} = JSON.parse(info);
  const {$values: externalValues} = JSON.parse(externalInfo);

  const {boardItems, enabledItems} = await _getEnabledAndBoardItems(values);

  const {externalBoardItems} = await _getExternalBoardItems(externalValues);
  // @ts-ignore
  store.dispatch(_addItems(boardItems));
  // @ts-ignore
  store.dispatch(setEquippedItems(enabledItems));
  // @ts-ignore
  store.dispatch(openExternalBoard(externalBoardItems, externalBoardHeight));
}

// _addItems: 1. check every item from derived, find on board and check all props on equality; 2. check all board items
// and if there is additional items - isAnyChanges = true and set all arrived items except checked items

const _addItems = (items: Item[]) => {
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

const addItemBySquares = (squares, item: Item) => {
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
  addItem,
  // to rotate non-dragged item
  addItemBySquares,
  removeItem,
  openOrRefreshInventory,
  openDoubleInventory,
  changeEquippedState,
  removeItemFromBoard,
  boardChangeCurrentCountByItemId,
  setSquareSize,
  importItemImage
}