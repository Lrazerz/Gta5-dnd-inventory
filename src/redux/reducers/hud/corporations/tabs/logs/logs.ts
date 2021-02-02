import {LogsInitialStateInterface} from "../../../../../../hud/models/corporations/tabs/logs/logsInterfaces";
import {
  CORPORATIONS_LOGS_OPEN,
  CORPORATIONS_LOGS_OPEN_PAGE_ONLY
} from "../../../../../actions/hud/corporations/tabs/logs/logsTypes";

const initialState: LogsInitialStateInterface = {
  currentPage: 1,
  pagesCount: 1,
  logs: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CORPORATIONS_LOGS_OPEN: {
      return {
        ...state,
        ...action.logsData,
      }
    }
    case CORPORATIONS_LOGS_OPEN_PAGE_ONLY: {
      return {
        ...initialState,
        currentPage: action.pageNumber,
        pagesCount: state.pagesCount,
      }
    }
    default: {
      return state;
    }
  }
}