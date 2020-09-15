import {
  DRAGGED_ITEM_SET,
  DRAGGED_ITEM_RELEASE,
  HOVERED_SQUARES_SET,
  HOVERED_SQUARES_REMOVE
} from "../actions/types";
import Item from "../../models/Item";

interface State {
  item: Item | null;

  xUp: number | null;
  xDown: number | null;
  yUp: number | null;
  yDown: number | null;

  hoveredSquare: [number,number] | null;
  allHoveredSquares: Array<Array<number>> | null;

  canDrop: boolean;
}

const initialState: State = {
  item: null,

  xUp: null,
  xDown: null,
  yUp: null,
  yDown: null,

  // Square, hovered with mouse
  hoveredSquare: null,
  // All hovered squares depending on the size of the item
  allHoveredSquares: [],

  canDrop: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DRAGGED_ITEM_SET: {
      const {item,xUp,xDown,yUp,yDown} = action;
      return {
        ...state,
        item,
        xUp,
        xDown,
        yUp,
        yDown
      }
    }
    case DRAGGED_ITEM_RELEASE: {
      return initialState;
    }
    case HOVERED_SQUARES_REMOVE: {
      return {
        ...state,
        hoveredSquare: null,
        allHoveredSquares: null,
      }
    }
    case HOVERED_SQUARES_SET: {
      return {
        ...state,
        hoveredSquare: action.square,
        allHoveredSquares: action.squares,
        canDrop: action.canDrop,
      }
    }
    default: {
      return state;
    }
  }
}
