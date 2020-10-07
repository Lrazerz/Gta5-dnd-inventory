import {
  DRAGGED_ITEM_SET,
  DRAGGED_ITEM_RELEASE,
  HOVERED_SQUARES_SET,
  HOVERED_SQUARES_REMOVE,
  GOING_TO_DROP_SET
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

  goingToDrop : false,
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

  goingToDrop : false,
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
        yDown,
        goingToDrop: false
      }
    }
    case DRAGGED_ITEM_RELEASE: {
      return initialState;
    }
    case HOVERED_SQUARES_REMOVE: {
      return initialState;
    }
    case HOVERED_SQUARES_SET: {
      return {
        ...state,
        isHoveredEquipped: action.isHoveredEquipped,
        hoveredSquare: action.square,
        allHoveredSquares: action.squares,
        canDrop: action.canDrop,
        goingToDrop: false,
      }
    }
    case GOING_TO_DROP_SET: {
      return {
        ...state,
        hoveredSquare: null,
        allHoveredSquares: [],
        goingToDrop: action.goingToDrop,
        canDrop: action.canDrop,
      }
    }
    default: {
      return state;
    }
  }
}
