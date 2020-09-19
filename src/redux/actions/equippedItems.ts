import {EQUIPPED_ITEM_SET, EQUIPPED_ITEMS_SET, EQUIPPED_ITEM_REMOVE} from "./types";
import Item from "../../models/Item";
import {translateToServerItem} from "../../utils/translateToServerItem";

const _removeEquippedItem = (cellId) => {
  return {type: EQUIPPED_ITEM_REMOVE, id: cellId};
}

const setEquippedItem = (cellId) => (dispatch, getState) => {
  const item: Item = getState().draggedItem.item;
  item.mainCell = cellId;
  dispatch({type: EQUIPPED_ITEM_SET, id: cellId, item});
  const itemToServer = translateToServerItem(item, true);
  // setTimeout(() => mp.trigger(itemToServer),0);
  // @ts-ignore
  // setTimeout(() => window.mp(itemToServer),0);
}

const setEquippedItems = (items: Item[]) => {
  return {type: EQUIPPED_ITEMS_SET, items};
}

const removeEquippedItem = (cellId) => {
  return dispatch => {
    dispatch(_removeEquippedItem(cellId));
  }
}

export {setEquippedItem, removeEquippedItem, setEquippedItems};