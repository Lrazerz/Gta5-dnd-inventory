import {EQUIPPED_STATE_CHANGE, SINGLE_ITEM_SQUARES_FILL, SQUARES_FILL, SQUARES_RELEASE} from "./types";
import store from "../store";
import {setEquippedItems} from "./equippedItems";
import {ItemCategories} from "../../constants/dnd/categories";
import {xMax} from "../../constants/boardDimensions";
import Item from "../../models/Item";
import DummyImage from '../../assets/dummy/weapon.png';
import {translateToServerItem} from "../../utils/translateToServerItem";
import {ItemTypes} from "../../constants/dnd/types";
import WeaponItem from "../../models/WeaponItem";
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
      Name, PosNumberLeftAngle, SizeX, SizeY, Enabled, CurrentCount = 1, ...rest
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
        SizeX, SizeY, CurrentCount,
        ImageUrl, Enabled, rest);
    } else {
      // If is not weapon
      FullItem = new Item(ID, Name, category, PosNumberLeftAngle,
        SizeX, SizeY, CurrentCount,
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

      FullItem.mainCell = [mainCellX, mainCellY];

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

const _changeEquippedState = (squares, newState) => {
  return {type: EQUIPPED_STATE_CHANGE, squares, state: newState};
}

// add item fetched from draggedItem
const addItem = () => {
  return (dispatch, getState) => {
    const {hoveredSquare, allHoveredSquares, xDown, yDown, item} = getState().draggedItem;

    item.mainCell = [hoveredSquare[0] - xDown, hoveredSquare[1] - yDown];
    item.isEquipped = false;

    dispatch(_addItem(allHoveredSquares, item));
    // translate to Server Item
    const itemToServer = translateToServerItem(item);
    //@ts-ignore
    mp.trigger(itemToServer);
  }
}

// mainCell, width, height
const removeItem = ([x, y], width = 1, height = 1) => {
  return dispatch => {
    const itemsToRemove = [];
    for (let currX = x; currX < x + width; currX++) {
      for (let currY = y; currY < y + height; currY++) {
        itemsToRemove.push([currX, currY]);
      }
    }

    dispatch(_removeItem(itemsToRemove));
  }
}

const changeEquippedState = (item, newState) => dispatch => {
  const squares = [];

  for(let y = item.mainCell[1]; y < item.mainCell[1] + item.height; y++) {
    for(let x = item.mainCell[0]; x < item.mainCell[0] + item.width; x++) {
      squares.push([x,y]);
    }
  }

  dispatch(_changeEquippedState(squares, newState));
}

export {
  addItem,
  removeItem,
  openOrRefreshInventory,
  changeEquippedState
}