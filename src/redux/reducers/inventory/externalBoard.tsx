import {
  OPEN_EXTERNAL_BOARD,
  CLOSE_EXTERNAL_BOARD,
  SINGLE_EXTERNAL_ITEM_SQUARES_FILL,
  EXTERNAL_ITEM_SQUARES_RELEASE,
  EXTERNAL_BOARD_CURRENT_COUNT_CHANGE
} from "../../actions/inventory/types";
import Item from "../../../inventory/models/Item";
import {xMax, xMin, yMin} from "../../../inventory/constants/boardDimensions";

let _fillExternalBoard: (height: number) => Array<Array<number>>;
_fillExternalBoard = (height) => {
  const boardItems = [];
  for(let y = yMin; y < height; y++) {
    boardItems[y] = [];
    for(let x = xMin; x <= xMax; x++) {
      boardItems[y][x] = null;
    }
  }
  return boardItems;
}

interface State {
  externalBoard: Item[] | any[];
}

// isActive when has items
const initialState: State = {
  externalBoard: [],
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
      const newBoard = _fillExternalBoard(action.height);
      action.items.forEach(itemAndSquares => {
        const {squares, ...itemProps} = itemAndSquares;
        squares.forEach(square => {
          newBoard[square[1]][square[0]] = {
            ...itemProps
          };
        });
      });
      return {
        ...state,
        externalBoard: newBoard,
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
