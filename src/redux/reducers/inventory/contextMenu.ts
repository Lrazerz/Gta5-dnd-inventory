import ItemModel from "../../../inventory/models/ItemModel";
import {CONTEXT_MENU_OPEN, CONTEXT_MENU_CLOSE, DRAGGED_ITEM_SET, CONTEXT_MENU_SPLIT_OPEN} from "../../actions/inventory/types";

interface State {
  contextItem: null | ItemModel;
  hoveredArea: null | number;

  leftOffset: null | number;
  topOffset: null | number;
  topOffsetTopContext: null | number;

  splitMenuOpen: boolean;
}

const initialState: State = {
  contextItem: null,
  hoveredArea: null,
  // offsets from document edge
  leftOffset: null,
  topOffset: null,
  topOffsetTopContext: null,
  splitMenuOpen: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CONTEXT_MENU_OPEN: {
      return {
        ...state,
        contextItem: action.item,
        hoveredArea: action.hoveredArea,
        leftOffset: action.leftOffset,
        topOffset: action.topOffset,
        topOffsetTopContext: action.topOffsetTopContext,
        splitMenuOpen: false,
      }
    }
    case CONTEXT_MENU_SPLIT_OPEN: {
      return {
        ...state,
        splitMenuOpen: true,
      }
    }
    case CONTEXT_MENU_CLOSE:
    case DRAGGED_ITEM_SET: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
