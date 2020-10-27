import {
  OPEN_EXTERNAL_BOARD,
  CLOSE_EXTERNAL_BOARD,
  SINGLE_EXTERNAL_ITEM_SQUARES_FILL,
  EXTERNAL_ITEM_SQUARES_RELEASE,
  EXTERNAL_BOARD_CURRENT_COUNT_CHANGE
} from "../actions/types";
import Item from "../../models/Item";
import {dummyExternalItems} from "../../constants/dummy/dummyExternalItems";

interface State {
  externalBoard: Item[] | any[];
}

// isActive when has items
const initialState: State = {
  externalBoard: dummyExternalItems.items,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SINGLE_EXTERNAL_ITEM_SQUARES_FILL: {
      const newBoard = [...state.externalBoard];
      const {squares, item} = action;
      squares.forEach(square => {
        const [x, y] = square;
        newBoard[y][x] = item;
      });
      return {
        ...state,
        externalBoard: newBoard,
      }
    }
    case OPEN_EXTERNAL_BOARD: {
      return {
        ...state,
        externalBoard: action.newBoard,
      }
    }
    case EXTERNAL_ITEM_SQUARES_RELEASE: {
      const newBoard = [...state.externalBoard];
      action.squares.forEach(square => {
        const [x, y] = square;
        newBoard[y][x] = null;
      });
      return {
        ...state,
        externalBoard: newBoard,
      }
    }
    case CLOSE_EXTERNAL_BOARD: {
      return {
        ...state,
        externalBoard: [],
      }
    }
    case EXTERNAL_BOARD_CURRENT_COUNT_CHANGE: {
      const newBoard = [...state.externalBoard];
      action.squares.forEach(square => {
        const [x,y] = square;
        newBoard[y][x].currentCount = action.newCurrentCount;
      });
      return {
        ...state,
        externalBoard: newBoard,
      }
    }
    default: {
      return state;
    }
  }
}
