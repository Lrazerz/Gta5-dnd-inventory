import {
  OPEN_EXTERNAL_BOARD,
  CLOSE_EXTERNAL_BOARD
} from "../actions/types";
import Item from "../../models/Item";

interface State {
  externalBoard: Item[] | [];
}

// isActive when has items
const initialState: State = {
  externalBoard: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_EXTERNAL_BOARD: {
      return {
        ...state,
        externalBoard: action.newBoard,
      }
    }
    case CLOSE_EXTERNAL_BOARD: {
      return {
        ...state,
        externalBoard: [],
      }
    }
    default: {
      return state;
    }
  }
}
