import Item from "../../models/Item";
import {ContextAction} from "../../models/Context/ContextAction";
import {CONTEXT_MENU_OPEN, CONTEXT_MENU_CLOSE, DRAGGED_ITEM_SET} from "../actions/types";

interface State {
  contextItem: null | Item;

  leftOffset: null | number;
  topOffset: null | number;

  // can't save func to redux
  // contextActions: null | ContextAction[];
}

const initialState: State = {
  contextItem: null,

  // offsets from document edge
  leftOffset: null,
  topOffset: null,

  // contextActions: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CONTEXT_MENU_OPEN: {
      return {
        ...state,
        contextItem: action.item,
        leftOffset: action.leftOffset,
        topOffset: action.topOffset,
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
