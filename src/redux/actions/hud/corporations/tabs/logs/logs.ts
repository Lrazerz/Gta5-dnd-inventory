import {CORPORATIONS_LOGS_OPEN, CORPORATIONS_LOGS_OPEN_PAGE_ONLY} from "./logsTypes";
import {
  LogsInitialStateInterface,
  SingleLogInterface
} from "../../../../../../hud/models/corporations/tabs/logs/logsInterfaces";
import {mpTrigger_corporations_logs_changePage} from "../../../../../../utils/mpTriggers/hud/corporations/tabs/logs/logsTriggers";

const corporationsLogsOpenAction = (logsData: LogsInitialStateInterface) => {
  return {type: CORPORATIONS_LOGS_OPEN, logsData}
}

// change only "currentPage" field
const corporationsLogsOpenPageOnlyAction = (pageNumber, lastLog: SingleLogInterface) => {
  return dispatch => {
    dispatch({type: CORPORATIONS_LOGS_OPEN_PAGE_ONLY, pageNumber});
    mpTrigger_corporations_logs_changePage(pageNumber, lastLog);
  }
}

const corporationsLogsOpenPageAction = (logsData: LogsInitialStateInterface) => {
  return (dispatch, getState) => {
    const currentPage = getState().hud.corporations.tabs.logs.currentPage;
    if(currentPage !== logsData.currentPage) {
      console.warn('[forb] current page doesnt match');
      return;
    }
    dispatch({type: CORPORATIONS_LOGS_OPEN, logsData});
  }
}

// corporationsLogs...

export {
  corporationsLogsOpenAction,
  corporationsLogsOpenPageOnlyAction,
  corporationsLogsOpenPageAction
}