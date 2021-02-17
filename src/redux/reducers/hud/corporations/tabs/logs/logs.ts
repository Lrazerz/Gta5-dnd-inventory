import { LogsInitialStateInterface } from '../../../../../../models/hud/corporations/tabs/logs/logsInterfaces';
import {
  CORPORATIONS_LOGS_OPEN,
  CORPORATIONS_LOGS_OPEN_PAGE_ONLY,
} from '../../../../../actions/hud/corporations/tabs/logs/logsTypes';
import { CORPORATIONS_TAB_OPEN } from '../../../../../actions/hud/corporations/corporationsTypes';
import { CorporationsTabsEnum } from '../../../../../../models/hud/corporations/enums';

const initialState: LogsInitialStateInterface = {
  currentPage: 1,
  pagesCount: 1,
  logs: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CORPORATIONS_TAB_OPEN: {
      if (action.openedTab === CorporationsTabsEnum.logs) {
        return {
          ...initialState,
        };
      }
      return state;
    }
    case CORPORATIONS_LOGS_OPEN: {
      return {
        ...state,
        ...action.logsData,
      };
    }
    case CORPORATIONS_LOGS_OPEN_PAGE_ONLY: {
      return {
        ...initialState,
        currentPage: action.pageNumber,
        pagesCount: state.pagesCount,
      };
    }
    default: {
      return state;
    }
  }
};
