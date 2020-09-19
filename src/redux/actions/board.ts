import {SINGLE_ITEM_SQUARES_FILL, SQUARES_RELEASE, SQUARES_FILL} from "./types";
import store from "../store";
import {setEquippedItems} from "./equippedItems";
import {ItemCategories} from "../../constants/dnd/categories";
import {xMax} from "../../constants/boardDimensions";
import Item from "../../models/Item";
import {translateToServerItem} from "../../utils/translateToServerItem";

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
      ImageUrl || 'https://i.ibb.co/HCn40jg/weapon-2.png', rest);

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

// @ts-ignore
window.mp = async (item) => {
  let asd = 1;
  for(let i = 0; i < 1000000000; i++) {
    asd = i;
  }
  console.log('mp works',item);
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

// add item fetched from draggedItem
const addItem = ([x, y]) => {
  return async (dispatch, getState) => {
    const {allHoveredSquares, xDown, yDown, item} = getState().draggedItem;
    if(item.mainCell[0] === x - xDown && item.mainCell[1] === y - yDown) {
      return;
    }
    item.mainCell = [x - xDown, y - yDown];

    await dispatch(_addItem(allHoveredSquares, item));
    const itemToServer = translateToServerItem(item, false);
    // console.log('trigger',itemToServer);
    //@ts-ignore
    // window.mp(item);

    // translate to Server Item
    // setTimeout(() => mp.trigger(itemToServer),0);
    // mp.trigger(itemToServer);
  }
}

// remove items from AppBoard
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