import {
  DRAGGED_ITEM_SET,
  DRAGGED_ITEM_RELEASE,
  HOVERED_SQUARES_SET,
  HOVERED_SQUARES_REMOVE
} from "../actions/types";

interface State {
  item: any;

  xUp: number | null;
  xDown: number | null;
  yUp: number | null;
  yDown: number | null;

  isHoveredEquipped: boolean;
  hoveredSquare: [number,number] | number | null;
  allHoveredSquares: Array<Array<number>> | number | null;

  canDrop: boolean;
}

const initialState: State = {
  item: null,

  xUp: null,
  xDown: null,
  yUp: null,
  yDown: null,

  isHoveredEquipped: false,
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
        ...initialState
      }
    }
    case HOVERED_SQUARES_SET: {
      return {
        ...state,
        isHoveredEquipped: action.isHoveredEquipped,
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
