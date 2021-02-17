import { SET_IS_OPENED_INTERACTIONS, SET_ALL_INTERACTIONS } from '../../actions/hud/interactionsTypes';
import { SingleInteractionInterface } from '../../../models/hud/InteractionInterfaces';

interface InitialStateInterface {
  isOpened: boolean;
  interactions: SingleInteractionInterface[] | [];
}

const initialState: InitialStateInterface = {
  isOpened: false,
  interactions: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_OPENED_INTERACTIONS: {
      if (action.isOpened) {
        return {
          ...state,
          isOpened: action.isOpened,
        };
      }
      return {
        ...state,
        isOpened: action.isOpened,
        interactions: [],
      };
    }
    case SET_ALL_INTERACTIONS: {
      return {
        ...state,
        isOpened: true,
        interactions: action.interactions,
      };
    }
    default: {
      return state;
    }
  }
};
