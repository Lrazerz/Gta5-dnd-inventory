import {xMin, xMax, yMin, yMax} from "../../constants/boardDimensions";
import {SINGLE_ITEM_SQUARES_FILL, SQUARES_FILL, SQUARES_RELEASE} from "../actions/types";

// board - matrix;
// board[y][x] - single cell, if null - empty,
// if {mainCell:[x,y],width,height,} - filled
// const initialState = {
//   board: [],
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
  return {board};
}

export default (state = _fillInitialState(), action) => {
  switch (action.type) {
    case SINGLE_ITEM_SQUARES_FILL: {
      const newBoard = [...state.board];
      const {squares, item} = action;
      squares.forEach(square => {
        const [x, y] = square;
        newBoard[y][x] = item;
      });
      return {
        ...state,
        board: newBoard,
      }
    }
    case SQUARES_FILL: {
      const newBoard = _fillInitialState().board;
      action.items.forEach(item => {
        const {squares, ...itemProps} = item;
        squares.forEach(square => {
          newBoard[square[1]][square[0]] = {
            ...itemProps
          };
        });
      });

      return {
        ...state,
        board: newBoard,
      }
    }
    case SQUARES_RELEASE: {
      const newBoard = [...state.board];
      action.squares.forEach(square => {
        const [x, y] = square;
        newBoard[y][x] = null;
      })
      return {
        ...state,
        board: newBoard,
      }
    }
    default: {
      return state;
    }
  }
}
