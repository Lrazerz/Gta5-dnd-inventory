import {
  DRAGGED_ITEM_SET,
  DRAGGED_ITEM_RELEASE,
  HOVERED_SQUARES_SET,
  HOVERED_SQUARES_REMOVE,
  GOING_TO_DROP_SET, EXTERNAL_BOARD_CURRENT_COUNT_CHANGE,
} from "../../actions/inventory/types";
import Item from "../../../inventory/models/Item";

export interface GoingToStack {
  stackableItem: Item,
  stackableItemNewCurrentCount: number,
  draggedItemNewCurrentCount: number,
}

// from 1 coz 0 casting to false
enum HoveredAreas {
  Board = 1, ExternalBoard, Equipped
}

interface State {
  item: any;
  draggedItemArea: HoveredAreas | null;

  xUp: number | null;
  xDown: number | null;
  yUp: number | null;
  yDown: number | null;

  //last-remove
  // isHoveredEquipped: boolean;
  hoveredArea: HoveredAreas | null;

  hoveredSquare: [number,number] | number | null;
  allHoveredSquares: Array<Array<number>> | number | null;

  canDrop: boolean;

  goingToDrop : null | {areaId: number},
  goingToStack: null | GoingToStack,
}

const initialState: State = {
  item: null,
  draggedItemArea:  null,

  xUp: null,
  xDown: null,
  yUp: null,
  yDown: null,

  //last-remove
  // isHoveredEquipped: false,
  hoveredArea: null,


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
      const {item,xUp,xDown,yUp,yDown, draggedItemArea} = action;
      return {
        ...state,
        item: {...item},
        draggedItemArea,
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
        hoveredArea: null,
      }
    }
    case HOVERED_SQUARES_SET: {
      return {
        ...state,
        hoveredArea: action.hoveredArea,
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
        hoveredArea: null,
      }
    }
    default: {
      return state;
    }
  }
}
