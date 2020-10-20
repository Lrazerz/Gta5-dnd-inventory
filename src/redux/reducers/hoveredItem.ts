import {
  DRAGGED_ITEM_SET,
  HOVERED_ITEM_ADD, HOVERED_ITEM_REMOVE
} from "../actions/types";
import Item from "../../models/Item";

interface State {
  item: Item | null;
}

const initialState : State = {
  item: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case HOVERED_ITEM_ADD: {
      return {
        ...state,
        item: action.item,
      }
    }
    case HOVERED_ITEM_REMOVE:
    case DRAGGED_ITEM_SET: {
      return {
        ...state,
        item: null,
      }
    }
    default: {
      return state;
    }
  }
}