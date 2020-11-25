import {
  EQUIPPED_ITEM_SET,
  EQUIPPED_ITEMS_SET,
  EQUIPPED_ITEM_REMOVE,
  EQUIPPED_CURRENT_COUNT_CHANGE,
  EQUIPPED_ALL_ITEMS_RELEASE,
} from "./types";
import Item from "../../../inventory/models/Item";
import {mpTriggerMoveItem} from "../../../utils/mpTriggers/inventory/mpTriggers";

const _removeEquippedItem = (cellId) => {
  return {type: EQUIPPED_ITEM_REMOVE, id: cellId};
}

const _releaseAllEquippedItems = () => {
  return {type: EQUIPPED_ALL_ITEMS_RELEASE};
}

const setEquippedItem = (cellId) => (dispatch, getState) => {
  // create new copy of item
  const {item: {...newDraggedItem}, draggedItemArea} = getState().inventory.draggedItem;


  newDraggedItem.mainCell = cellId;
  newDraggedItem.isRotated = false;
  if(draggedItemArea !== 3) {
    newDraggedItem.isWeaponEquipped = false;
  }
  dispatch({type: EQUIPPED_ITEM_SET, id: cellId, item: {...newDraggedItem}});
  mpTriggerMoveItem(newDraggedItem);
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
    const weaponCells = getState().inventory.equippedItems.cells.slice(1, 4);
    // remove item from equipped if item exists
    let weaponCellIdx = weaponCells.findIndex(cell => cell.item && cell.item.id === id);

    if (weaponCellIdx !== -1) {
      // +1 coz weaponCells indexes dont corresponds to cells indexes
      dispatch(_removeEquippedItem(weaponCellIdx + 1));
    }
  }
}

const equippedChangeCurrentCount = (squareId, newCurrentCount) => {
  return dispatch => {
    if (newCurrentCount === 0) {
      dispatch(removeEquippedItem(squareId));
    } else {
      dispatch({type: EQUIPPED_CURRENT_COUNT_CHANGE, squareId, newCurrentCount});
    }
  }
}

export {
  setEquippedItem,
  removeEquippedItem,
  setEquippedItems,
  removeEquippedWeaponFromEquipped,
  equippedChangeCurrentCount
};