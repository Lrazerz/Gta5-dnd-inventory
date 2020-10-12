import {
  EQUIPPED_ITEM_SET,
  EQUIPPED_ITEMS_SET,
  EQUIPPED_ITEM_REMOVE,
  EQUIPPED_CURRENT_COUNT_CHANGE,
} from "./types";
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
  mp.trigger('cef_cl_moveItem', itemToServer);
}

const setEquippedItems = (items: Item[] | []) => {
  return {type: EQUIPPED_ITEMS_SET, items};
}

const removeEquippedItem = (cellId) => {
  return dispatch => {
    dispatch(_removeEquippedItem(cellId));
  }
}

const removeEquippedWeaponFromEquipped = (id) => {
  return (dispatch, getState) => {
    //find weapon by id and just remove item *
    const weaponCells = getState().equippedItems.cells.slice(1, 4);
    // remove item from equipped if item exists
    let weaponCellIdx = weaponCells.findIndex(cell => cell.item && cell.item.id === id);

    if (weaponCellIdx !== -1) {
      // +1 coz weaponCells indexes dont corresponds to cells indexes
      dispatch(_removeEquippedItem(weaponCellIdx + 1));
    }
  }
}

const equippedChangeCurrentCount = (squareId, newCurrentCount) => {
  return {type: EQUIPPED_CURRENT_COUNT_CHANGE, squareId, newCurrentCount}
}

export {
  setEquippedItem,
  removeEquippedItem,
  setEquippedItems,
  removeEquippedWeaponFromEquipped,
  equippedChangeCurrentCount
};