import {
  BOARD_CURRENT_COUNT_CHANGE,
  EQUIPPED_STATE_CHANGE,
  SINGLE_ITEM_SQUARES_FILL,
  SQUARES_FILL,
  SQUARES_RELEASE
} from "./types";
import store from "../store";
import {setEquippedItems} from "./equippedItems";
import {ItemCategories} from "../../constants/dnd/categories";
import {xMax, xMin, yMax, yMin} from "../../constants/boardDimensions";
import Item from "../../models/Item";
import DummyImage from '../../assets/dummy/weapon.png';
import {translateToServerItem} from "../../utils/translateToServerItem";
import {ItemTypes} from "../../constants/dnd/types";
import {AnyAction} from 'redux';
import get = Reflect.get;
//'https://i.ibb.co/HCn40jg/weapon-2.png'

const openOrRefreshInventory = async (info) => {
  const values = JSON.parse(info).$values;

  // equipped
  const enabledItems = [];
  const boardItems = [];

  for(const propName in values) {
    // map through every item and add to corresponding array
    // item - single item with its own sizes
    const item = values[propName];

    // Square numbers starts from 1 instead of 0
    const {
      Name, PosNumberLeftAngle, SizeX, SizeY, Enabled, CurrentCount, MaxCount, IsRotated, ...rest
    } = item;
    const ID = item.ID.toString();

    //region ------------------------------ Import image ------------------------------
    let ImageUrl;
    try {
      ImageUrl = await import(`../../assets/images/items/${Name.toLowerCase()}.png`);
    } catch (e) {
      if(e.code === 'MODULE_NOT_FOUND') {
        // console.log(`image for "${Name}" not found, using default image.`)
      } else {
        console.log('error while importing image');
      }
    }

    if(ImageUrl) {
      ImageUrl = ImageUrl.default;
    } else {
      ImageUrl = DummyImage;
    }
    //endregion

    const category: ItemCategories | string = item.Category.toLowerCase();

    let FullItem: Item;

    if(!IsRotated) {
      FullItem = new Item(ID, Name, category, PosNumberLeftAngle,
        SizeX, SizeY, CurrentCount, MaxCount,
        ImageUrl, Enabled, IsRotated, rest);
    } else {
      // swap width and height
      FullItem = new Item(ID, Name, category, PosNumberLeftAngle,
        SizeY, SizeX, CurrentCount, MaxCount,
        ImageUrl, Enabled, IsRotated, rest);
    }

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

  if(boardItems.length > 0) store.dispatch(_addItems(boardItems));
  if(enabledItems.length > 0) store.dispatch(setEquippedItems(enabledItems));
}

const _addItem = (squares, item: Item) => {
  return {type: SINGLE_ITEM_SQUARES_FILL, squares, item};
}

const _addItems = (items: Item[]) => {
  return {type: SQUARES_FILL, items};
}

const _removeItem = (coordsArr) => {
  return {type: SQUARES_RELEASE, squares: coordsArr};
}

const _changeEquippedState = (squares, item) => {
  return {type: EQUIPPED_STATE_CHANGE, squares, item};
}

// add item fetched from draggedItem
const addItem = () => {
  return (dispatch, getState) => {
    const {hoveredSquare, allHoveredSquares, xDown, yDown, item: draggedItem} = getState().draggedItem;

    const newDraggedItem = {...draggedItem};

    newDraggedItem.mainCell = [hoveredSquare[0] - xDown, hoveredSquare[1] - yDown];

    newDraggedItem.isEquipped = false;

    if(typeof hoveredSquare === 'number' && newDraggedItem.isWeaponEquipped) {
      // if item derived from eq items and it is weapon (isWeaponEquipped can be true only on weapons)
      newDraggedItem.isWeaponEquipped = false;
     }

    dispatch(_addItem(allHoveredSquares, newDraggedItem));
    // translate to Server Item
    const itemToServer = translateToServerItem(newDraggedItem);
    //@ts-ignore
    mp.trigger('cef_cl_moveItem', itemToServer);
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
    const {board} = getState().board;
    console.log('board', board);

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
  // newState === isEquipped
  const squares = [];

  newItem.isWeaponEquipped = newState;

  for(let y = newItem.mainCell[1]; y < newItem.mainCell[1] + newItem.height; y++) {
    for(let x = newItem.mainCell[0]; x < newItem.mainCell[0] + newItem.width; x++) {
      squares.push([x,y]);
    }
  }
  dispatch(_changeEquippedState(squares, newItem));
}

const boardChangeCurrentCountByItemId = (id, newCurrentCount) => {
  return (dispatch, getState) => {
    const boardCells = getState().board.board;

    const requiredCells = [];

    boardCells.forEach((row, yPos) => {
      row.forEach((item, xPos) => {
        if(item && item.id === id) {
          requiredCells.push([xPos, yPos]);
        }
      });
    });

    if(newCurrentCount === 0) {
      return _removeItem(requiredCells);
    }
    dispatch({type: BOARD_CURRENT_COUNT_CHANGE, squares: requiredCells, newCurrentCount});
  }
}



export {
  addItem,
  removeItem,
  openOrRefreshInventory,
  changeEquippedState,
  removeItemFromBoard,
  boardChangeCurrentCountByItemId
}