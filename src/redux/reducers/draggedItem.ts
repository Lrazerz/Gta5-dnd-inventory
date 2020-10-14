import {
  DRAGGED_ITEM_SET,
  DRAGGED_ITEM_RELEASE,
  HOVERED_SQUARES_SET,
  HOVERED_SQUARES_REMOVE,
  GOING_TO_DROP_SET,
} from "../actions/types";
import Item from "../../models/Item";

export interface GoingToStack {
  stackableItem: Item,
  stackableItemNewCurrentCount: number,
  draggedItemNewCurrentCount: number,
}

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

  goingToDrop : null | {areaId: number},
  goingToStack: null | GoingToStack,
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

  goingToDrop : null,
  goingToStack: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DRAGGED_ITEM_SET: {
      const {item,xUp,xDown,yUp,yDown} = action;
      return {
        ...state,
        item: {...item},
        xUp,
        xDown,
        yUp,
        yDown,
        goingToDrop: false,
        goingToStack: false,
      }
    }
    case DRAGGED_ITEM_RELEASE: {
      return initialState;
    }
    case HOVERED_SQUARES_REMOVE: {
      return {
        ...state,
        hoveredSquare: null,
        allHoveredSquares: [],
      }
    }
    case HOVERED_SQUARES_SET: {
      return {
        ...state,
        isHoveredEquipped: action.isHoveredEquipped,
        hoveredSquare: action.square,
        allHoveredSquares: action.squares,
        canDrop: action.canDrop,
        goingToDrop: false,
        goingToStack: action.goingToStack,
      }
    }
    case GOING_TO_DROP_SET: {
      const newGoingToDrop = action.goingToDrop ? {areaId: action.areaId} : null;
      return {
        ...state,
        hoveredSquare: null,
        allHoveredSquares: [],
        goingToDrop: newGoingToDrop,
        canDrop: action.canDrop,
        goingToStack: false,
      }
    }
    default: {
      return state;
    }
  }
}
