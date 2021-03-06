import { DRAGGED_ITEM_SET, HOVERED_ITEM_ADD, HOVERED_ITEM_REMOVE } from '../../actions/inventory/types';
import ItemModel from '../../../inventory/models/ItemModel';

// areas 1 - board, 2 - external board, 3 - equipped
interface State {
  item: ItemModel | null;
  hoveredArea: number | null;
}

const initialState: State = {
  item: null,
  hoveredArea: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HOVERED_ITEM_ADD: {
      return {
        ...state,
        item: action.item,
        hoveredArea: action.hoveredArea,
      };
    }
    case HOVERED_ITEM_REMOVE:
    case DRAGGED_ITEM_SET: {
      return {
        ...state,
        item: null,
        hoveredArea: null,
      };
    }
    default: {
      return state;
    }
  }
};
