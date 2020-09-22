import {SINGLE_ITEM_SQUARES_FILL, SQUARES_RELEASE, SQUARES_FILL} from "./types";
import store from "../store";
import {setEquippedItems} from "./equippedItems";
import {ItemCategories} from "../../constants/dnd/categories";
import {xMax} from "../../constants/boardDimensions";
import Item from "../../models/Item";
import DummyImage from '../../assets/dummy/weapon.png';
import {translateToServerItem} from "../../utils/translateToServerItem";
//'https://i.ibb.co/HCn40jg/weapon-2.png'

const openOrRefreshInventory = (info) => {
  const values = info.$values;

  // equipped
  const enabledItems = [];

  const boardItems = [];

  values.forEach(item => {
    // map through every item and add to corresponding array
    // item - single item with its own sizes

    // Square numbers starts from 1 instead of 0
    const {
      Name, PosNumberLeftAngle, SizeX, SizeY, Enabled, CurrentCount = 1
      , ImageUrl, ...rest
    } = item;
    const ID = item.ID.toString();

    const category: ItemCategories = item.Category.toLowerCase();

    const FullItem = new Item(ID, Name, category, PosNumberLeftAngle,
      SizeX, SizeY, CurrentCount,
      ImageUrl || DummyImage, rest);

    if (Enabled === true) {
      enabledItems.push(FullItem);
    } else {
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
  });
  store.dispatch(_addItems(boardItems));
  store.dispatch(setEquippedItems(enabledItems));
}
// @ts-ignore
window.openInventory = openOrRefreshInventory;
// @ts-ignore
window.refreshInventory = openOrRefreshInventory;

const _addItem = (squares, item: Item) => {
  return {type: SINGLE_ITEM_SQUARES_FILL, squares, item};
}

const _addItems = (items: Item[]) => {
  return {type: SQUARES_FILL, items};
}

const _removeItem = (coordsArr) => {
  return {type: SQUARES_RELEASE, squares: coordsArr};
}

// add item fetched from draggedItem
const addItem = ([x, y]) => {
  return (dispatch, getState) => {
    const {allHoveredSquares, xDown, yDown, item} = getState().draggedItem;

    item.mainCell = [x - xDown, y - yDown];

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

export {
  addItem,
  removeItem
}