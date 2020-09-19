import {
  EQUIPPED_ITEM_SET,
  EQUIPPED_ITEM_REMOVE, EQUIPPED_ITEMS_SET
} from "../actions/types";
import EquippedItemsCell from "../../models/EquippedItemsCell";

// cells[x] - {item: null | Item}
const initialState = {
  cells: [],
}

const fillInitialState = () => {
  const cells = [];

  // weapons
  cells[1] = new EquippedItemsCell(null);
  cells[2] = new EquippedItemsCell(null);
  cells[3] = new EquippedItemsCell(null);

  // weapons ammo
  cells[10] = new EquippedItemsCell(null);
  cells[20] = new EquippedItemsCell(null);
  cells[30] = new EquippedItemsCell(null);

  // weapon tools (improvements)
  cells[11] = new EquippedItemsCell(null);
  cells[12] = new EquippedItemsCell(null);
  cells[13] = new EquippedItemsCell(null);

  cells[21] = new EquippedItemsCell(null);
  cells[22] = new EquippedItemsCell(null);
  cells[23] = new EquippedItemsCell(null);

  cells[31] = new EquippedItemsCell(null);
  cells[32] = new EquippedItemsCell(null);
  cells[33] = new EquippedItemsCell(null);

  // phone and sim
  cells[40] = new EquippedItemsCell(null);
  cells[41] = new EquippedItemsCell(null);

  // headdress
  cells[50] = new EquippedItemsCell(null);
  cells[51] = new EquippedItemsCell(null);
  cells[52] = new EquippedItemsCell(null);

  // outer wear
  cells[60] = new EquippedItemsCell(null);
  cells[61] = new EquippedItemsCell(null);
  cells[62] = new EquippedItemsCell(null);

  // pants
  cells[70] = new EquippedItemsCell(null);
  cells[71] = new EquippedItemsCell(null);
  cells[72] = new EquippedItemsCell(null);

  // shoes
  cells[80] = new EquippedItemsCell(null);
  cells[81] = new EquippedItemsCell(null);
  cells[82] = new EquippedItemsCell(null);

  // accessories
  cells[90] = new EquippedItemsCell(null);
  cells[91] = new EquippedItemsCell(null);
  cells[92] = new EquippedItemsCell(null);
  cells[93] = new EquippedItemsCell(null);

  return {cells};
}

export default (state = fillInitialState(), action) => {
  switch (action.type) {
    case EQUIPPED_ITEM_SET: {
      const cells = [...state.cells];
      cells[action.id] = {
        ...cells[action.id],
        item: action.item,
      }
      return {
        ...state,
        cells,
      };
    }
    case EQUIPPED_ITEMS_SET: {
      const {cells} = fillInitialState();
      action.items.forEach(item => {
        const {mainCell, ...newItem} = item;
        cells[mainCell] = newItem;
      });
      return {
        ...state,
        cells,
      };
    }
    case EQUIPPED_ITEM_REMOVE: {
      const cells = [...state.cells];
      cells[action.id] = {
        ...cells[action.id],
        item: null,
      }
      return {
        ...state,
        cells,
      };
    }
    default: {
      return state;
    }
  }
}
