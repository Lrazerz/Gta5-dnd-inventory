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
import WeaponItem from "../../models/WeaponItem";
import {AnyAction} from 'redux';
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
      Name, PosNumberLeftAngle, SizeX, SizeY, Enabled, CurrentCount, MaxCount, ...rest
    } = item;
    const ID = item.ID.toString();

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

    const category: ItemCategories | string = item.Category.toLowerCase();

    let FullItem;

    // create separate item for weapon
    if(category === ItemTypes.WEAPON_RIFLE || category === ItemTypes.WEAPON_PISTOL
      || category === ItemTypes.WEAPON_LAUNCHER) {
      FullItem = new WeaponItem(ID, Name, category, PosNumberLeftAngle,
        SizeX, SizeY, CurrentCount, MaxCount,
        ImageUrl, Enabled, rest);
    } else {
      // If is not weapon
      FullItem = new Item(ID, Name, category, PosNumberLeftAngle,
        SizeX, SizeY, CurrentCount, MaxCount,
        ImageUrl, Enabled, rest);
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

      FullItem.mainCell = FullItem.mainCellOnBoard = [mainCellX, mainCellY];

      boardItems.push({...FullItem, squares: filledSquares});
    }
  }

  store.dispatch(_addItems(boardItems));
  store.dispatch(setEquippedItems(enabledItems));
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
    const {hoveredSquare, allHoveredSquares, xDown, yDown, item} = getState().draggedItem;

    const newDraggedItem = {...item};

    newDraggedItem.mainCell = [hoveredSquare[0] - xDown, hoveredSquare[1] - yDown];
    newDraggedItem.mainCellOnBoard = newDraggedItem.mainCell;

    if(typeof hoveredSquare === 'number' && newDraggedItem.isWeaponEquipped) {
      // if item derived from eq items and it is weapon (isWeaponEquipped can be true only on weapons)
      newDraggedItem.isWeaponEquipped = false;
      // dispatch(removeItem(item.mainCellOnBoard, item.width, item.height))
    }

    dispatch(_addItem(allHoveredSquares, newDraggedItem));
    // translate to Server Item
    const itemToServer = translateToServerItem(newDraggedItem);
    //@ts-ignore
    mp.trigger(itemToServer);
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
// mainCell, width, height
const removeEquippedWeaponFromBoard = (id) => {
  // invoke only in SquareEquippedItem
  return (dispatch, getState) => {
    const {board} = getState().board;

    let itemOnBoard;

    for(let y = yMin; y <= yMax; y++) {
      for(let x = xMin; x <= xMax; x++) {
        if(board[y][x] && board[y][x].id === id) itemOnBoard = board[y][x];
      }
    }

    if(itemOnBoard) {
      const {mainCell, width, height} = itemOnBoard;

      // more precisely "squares to remove"
      const itemsToRemove = [];
      for (let currX = mainCell[0]; currX < mainCell[0] + width; currX++) {
        for (let currY = mainCell[1]; currY < mainCell[1] + height; currY++) {
          itemsToRemove.push([currX, currY]);
        }
      }
      dispatch(_removeItem(itemsToRemove));
    }
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

const boardChangeCurrentCount = (squares, newCurrentCount) => {
  return {type: BOARD_CURRENT_COUNT_CHANGE, squares, newCurrentCount}
}

export {
  addItem,
  removeItem,
  openOrRefreshInventory,
  changeEquippedState,
  removeEquippedWeaponFromBoard,
  boardChangeCurrentCount
}