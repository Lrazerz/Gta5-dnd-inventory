import {
  EQUIPPED_ITEM_SET,
  EQUIPPED_ITEMS_SET,
  EQUIPPED_ITEM_REMOVE,
  EQUIPPED_CURRENT_COUNT_CHANGE,
  EQUIPPED_ALL_ITEMS_RELEASE,
} from "./types";
import Item from "../../models/Item";
import {translateToServerItem} from "../../utils/translateToServerItem";

const _removeEquippedItem = (cellId) => {
  return {type: EQUIPPED_ITEM_REMOVE, id: cellId};
}

const _releaseAllEquippedItems = () => {
  return {type: EQUIPPED_ALL_ITEMS_RELEASE};
}

const setEquippedItem = (cellId) => (dispatch, getState) => {
  // create new copy of item
  const item: Item = {...getState().draggedItem.item};
  item.mainCell = cellId;
  item.isEquipped = true;
  item.isRotated = false;
  dispatch({type: EQUIPPED_ITEM_SET, id: cellId, item});
  const itemToServer = translateToServerItem(item);
  //@ts-ignore
  mp.trigger('cef_cl_moveItem', itemToServer);
}

const setEquippedItems = (items: Item[] | []) => {
  return (dispatch, getState) => {
    if(items.length === 0) dispatch(_releaseAllEquippedItems());

    const equippedCells = getState().equippedItems.cells;
    let isAnyChanges = false;
    // checked items from items param (equal (with props) to equipped items)
    const checkedItems = [];

    //region ------------------------------ Check every item, find relative item on equipped ------------------------------
    for(let i = 0; i < items.length; i++) {
      const item = items[i];
      // @ts-ignore
      const equippedItem = equippedCells[item.mainCell].item;

      if(equippedItem) {
        // equipped has item from arrived items

        for(const key in item) {
          // check all props, if smth changed - set up isAnyChanges to true
          if(!equippedItem[key] || equippedItem[key] !== item[key]) {
            isAnyChanges = true;
            break;
          }
        }
      } else {
        isAnyChanges = true;
      }

      if(isAnyChanges) {
        break;
      }
      else {
        checkedItems.push(item);
      }
    }
    //endregion

    if(!isAnyChanges) {
      //region ------------------------------ Check every equipped item and find relative checked item ------------------------------

      for(let i = 0; i < equippedCells.length; i++) {
        const {item: equippedItem} = equippedCells[i];

        if(equippedItem) {
          const checkedItemIdx = checkedItems.findIndex(item => item.id === equippedItem.id);
          if(!checkedItemIdx) {
            // there is no such item in the checkedItems
            isAnyChanges = true;
            break;
          }
          else {
            // there is such item in the checkedItems
            for(const key in equippedItem) {
              if(equippedItem[key] !== checkedItems[checkedItemIdx][key]) {
                // if any
                isAnyChanges = true;
                break;
              }
            }

            // if any changes from props equality checks
            if(isAnyChanges) {
              break;
            }
          }
        }
      }
    }

    if(isAnyChanges) {
      dispatch({type: EQUIPPED_ITEMS_SET, items});
    }
  }
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