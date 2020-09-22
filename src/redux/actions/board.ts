import {SINGLE_ITEM_SQUARES_FILL, SQUARES_RELEASE, SQUARES_FILL} from "./types";
import store from "../store";
import {setEquippedItems} from "./equippedItems";
import {ItemCategories} from "../../constants/dnd/categories";
import {xMax} from "../../constants/boardDimensions";
import Item from "../../models/Item";
import DummyImage from '../../assets/dummy/weapon.png';
import {translateToServerItem} from "../../utils/translateToServerItem";
//'https://i.ibb.co/HCn40jg/weapon-2.png'

const openOrRefreshInventory = async (info) => {
  const values = info.$values;

  // equipped
  const enabledItems = [];

  const boardItems = [];

  for(const propName in values) {
    // map through every item and add to corresponding array
    // item - single item with its own sizes
    const item = values[propName];

    // Square numbers starts from 1 instead of 0
    const {
      Name, PosNumberLeftAngle, SizeX, SizeY, Enabled, CurrentCount = 1
      , ...rest
    } = item;
    const ID = item.ID.toString();

    let ImageUrl;
    try {
      ImageUrl = await import(`../../assets/images/items/${Name.toLowerCase()}.png`);
    } catch (e) {
      if(e.code === 'MODULE_NOT_FOUND') {
        console.log(`image for "${Name}" not found, using default image.`)
      } else {
        console.log('error while importing image');
      }
    }

    if(ImageUrl) {
      ImageUrl = ImageUrl.default;
    } else {
      ImageUrl = DummyImage;
    }

    const category: ItemCategories = item.Category.toLowerCase();
    const FullItem = new Item(ID, Name, category, PosNumberLeftAngle,
      SizeX, SizeY, CurrentCount,
      ImageUrl, rest);

    if (Enabled === true) {
      console.log('enabledItem', FullItem);
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

      console.log('boardItem', FullItem);
      boardItems.push({...FullItem, squares: filledSquares});
    }
  }




  console.log('addItems dispatch');
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