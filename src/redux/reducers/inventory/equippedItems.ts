import {
  EQUIPPED_ITEM_SET,
  EQUIPPED_ITEM_REMOVE,
  EQUIPPED_ITEMS_SET,
  EQUIPPED_CURRENT_COUNT_CHANGE,
  EQUIPPED_ALL_ITEMS_RELEASE,
} from '../../actions/inventory/types';
import EquippedItemsCellModel from '../../../inventory/models/EquippedItemsCellModel';

// cells[x] - {item: null | Item}

const fillInitialState = () => {
  const cells = [];

  // weapons
  cells[1] = new EquippedItemsCellModel(null);
  cells[2] = new EquippedItemsCellModel(null);
  cells[3] = new EquippedItemsCellModel(null);

  // weapons ammo
  cells[10] = new EquippedItemsCellModel(null);
  cells[20] = new EquippedItemsCellModel(null);
  cells[30] = new EquippedItemsCellModel(null);

  // weapon tools (improvements)
  cells[11] = new EquippedItemsCellModel(null);
  cells[12] = new EquippedItemsCellModel(null);
  cells[13] = new EquippedItemsCellModel(null);

  cells[21] = new EquippedItemsCellModel(null);
  cells[22] = new EquippedItemsCellModel(null);
  cells[23] = new EquippedItemsCellModel(null);

  cells[31] = new EquippedItemsCellModel(null);
  cells[32] = new EquippedItemsCellModel(null);
  cells[33] = new EquippedItemsCellModel(null);

  // phone and sim
  cells[40] = new EquippedItemsCellModel(null);
  cells[41] = new EquippedItemsCellModel(null);

  // headdress
  cells[50] = new EquippedItemsCellModel(null);
  cells[51] = new EquippedItemsCellModel(null);
  cells[52] = new EquippedItemsCellModel(null);

  // outer wear
  cells[60] = new EquippedItemsCellModel(null);
  cells[61] = new EquippedItemsCellModel(null);
  cells[62] = new EquippedItemsCellModel(null);

  // pants
  cells[70] = new EquippedItemsCellModel(null);
  cells[71] = new EquippedItemsCellModel(null);
  cells[72] = new EquippedItemsCellModel(null);

  // shoes
  cells[80] = new EquippedItemsCellModel(null);
  cells[81] = new EquippedItemsCellModel(null);
  cells[82] = new EquippedItemsCellModel(null);

  // accessories
  cells[90] = new EquippedItemsCellModel(null);
  cells[91] = new EquippedItemsCellModel(null);
  cells[92] = new EquippedItemsCellModel(null);
  cells[93] = new EquippedItemsCellModel(null);

  return { cells };
};

export default (state = fillInitialState(), action) => {
  switch (action.type) {
    case EQUIPPED_ITEM_SET: {
      const cells = [...state.cells];
      cells[action.id] = {
        ...cells[action.id],
        item: action.item,
      };
      return {
        ...state,
        cells,
      };
    }
    case EQUIPPED_ITEMS_SET: {
      const { cells } = fillInitialState();
      action.items.forEach((item) => {
        const newItem = { ...item };
        cells[newItem.mainCell].item = newItem;
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
      };
      return {
        ...state,
        cells,
      };
    }
    case EQUIPPED_CURRENT_COUNT_CHANGE: {
      const cells = [...state.cells];
      cells[action.squareId].item = {
        ...cells[action.squareId].item,
        currentCount: action.newCurrentCount,
      };
      return {
        ...state,
        cells,
      };
    }
    case EQUIPPED_ALL_ITEMS_RELEASE: {
      return fillInitialState();
    }
    default: {
      return state;
    }
  }
};
