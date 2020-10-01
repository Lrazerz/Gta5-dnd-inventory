import {EQUIPPED_ITEM_SET, EQUIPPED_ITEMS_SET, EQUIPPED_ITEM_REMOVE} from "./types";
import Item from "../../models/Item";
import {translateToServerItem} from "../../utils/translateToServerItem";

const _removeEquippedItem = (cellId) => {
  return {type: EQUIPPED_ITEM_REMOVE, id: cellId};
}

const setEquippedItem = (cellId) => (dispatch, getState) => {
  // create new copy of item
  const item: Item = {...getState().draggedItem.item};
  item.mainCell = cellId;
  item.isEquipped = true;
  dispatch({type: EQUIPPED_ITEM_SET, id: cellId, item});
  const itemToServer = translateToServerItem(item);
  //@ts-ignore
  mp.trigger(itemToServer);
}

const setEquippedItems = (items: Item[] | []) => {
  return {type: EQUIPPED_ITEMS_SET, items};
}

const removeEquippedItem = (cellId) => {
  return dispatch => {
    dispatch(_removeEquippedItem(cellId));
  }
}

export {setEquippedItem, removeEquippedItem, setEquippedItems};