import { xMin, xMax, yMin, yMax } from '../../../inventory/constants/boardDimensions';
import {
  BOARD_ALL_ITEMS_RELEASE,
  BOARD_CURRENT_COUNT_CHANGE,
  BOARD_SET_SQUARE_SIZE,
  EQUIPPED_STATE_CHANGE,
  SINGLE_ITEM_SQUARES_FILL,
  SQUARES_FILL,
  SQUARES_RELEASE,
} from '../../actions/inventory/types';

// board - matrix;
// board[y][x] - single cell, if null - empty,
// if {mainCell:[x,y],width,height,} - filled
// const initialState = {
//   board: [],
//   boardSquareSize: null (number, in px)
// }

// Fill the matrix
const _fillInitialState = () => {
  const board = [];
  for (let y = yMin; y <= yMax; y++) {
    board[y] = [];
    for (let x = xMin; x <= xMax; x++) {
      board[y][x] = null;
    }
  }
  return { board, boardSquareSize: null };
};

export default (state = _fillInitialState(), action) => {
  switch (action.type) {
    case SINGLE_ITEM_SQUARES_FILL: {
      const newBoard = [...state.board];
      const { squares, item } = action;
      squares.forEach((square) => {
        const [x, y] = square;
        newBoard[y][x] = item;
      });
      return {
        ...state,
        board: newBoard,
      };
    }
    case SQUARES_FILL: {
      const newBoard = _fillInitialState().board;
      action.items.forEach((itemAndSquares) => {
        const { squares, ...itemProps } = itemAndSquares;
        squares.forEach((square) => {
          newBoard[square[1]][square[0]] = {
            ...itemProps,
          };
        });
      });

      return {
        ...state,
        board: newBoard,
      };
    }
    case SQUARES_RELEASE: {
      const newBoard = [...state.board];
      action.squares.forEach((square) => {
        const [x, y] = square;
        newBoard[y][x] = null;
      });
      return {
        ...state,
        board: newBoard,
      };
    }
    case EQUIPPED_STATE_CHANGE: {
      const newBoard = [...state.board];
      action.squares.forEach((square) => {
        const [x, y] = square;
        newBoard[y][x] = action.item;
      });
      return {
        ...state,
        board: newBoard,
      };
    }
    case BOARD_CURRENT_COUNT_CHANGE: {
      const newBoard = [...state.board];
      action.squares.forEach((square) => {
        const [x, y] = square;
        newBoard[y][x].currentCount = action.newCurrentCount;
      });
      return {
        ...state,
        board: newBoard,
      };
    }
    case BOARD_ALL_ITEMS_RELEASE: {
      const { board } = _fillInitialState();
      return {
        ...state,
        board,
      };
    }
    case BOARD_SET_SQUARE_SIZE: {
      return {
        ...state,
        boardSquareSize: action.size,
      };
    }
    default: {
      return state;
    }
  }
};
