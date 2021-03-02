import {
  CORPORATIONS_CLOSE,
  CORPORATIONS_OPEN,
  CORPORATIONS_TAB_OPEN,
} from '../../../actions/hud/corporations/corporationsTypes';
import { CorporationsTabsEnum } from '../../../../models/hud/corporations/enums';

interface InitialStateInterface {
  isOpened: boolean;
  openedTab: CorporationsTabsEnum;
  // todo maybe info from main screen (info about corporation)
}

const initialState: InitialStateInterface = {
  isOpened: true,
  openedTab: CorporationsTabsEnum.boost,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CORPORATIONS_OPEN: {
      return {
        ...state,
        isOpened: true,
      };
    }
    case CORPORATIONS_CLOSE: {
      return initialState;
    }
    case CORPORATIONS_TAB_OPEN: {
      return {
        ...state,
        openedTab: action.openedTab,
      };
    }
    default: {
      return state;
    }
  }
};
