import {EQUIPPED_ITEM_SET, EQUIPPED_ITEMS_SET, EQUIPPED_ITEM_REMOVE} from "./types";

const _setEquippedItems = (cellId, items) => {
  return {type: EQUIPPED_ITEMS_SET, id: cellId, items};
}

const _removeEquippedItem = (cellId) => {
  return {type: EQUIPPED_ITEM_REMOVE, id: cellId};
}

const setEquippedItem = (cellId) => (dispatch, getState) => {
  const item = getState().draggedItem.item;
  item.mainCell = cellId;
  dispatch({type: EQUIPPED_ITEM_SET, id: cellId, item})
}

const setEquippedItems = (items) => {
  return {type: EQUIPPED_ITEMS_SET, items};
}

const removeEquippedItem = (cellId) => {
  return dispatch => {
    dispatch(_removeEquippedItem(cellId));
  }
}

export {setEquippedItem, removeEquippedItem, setEquippedItems};