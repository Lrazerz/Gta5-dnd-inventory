import {
  LogsInitialStateInterface,
  ServerLogInterface,
  SingleLogInterface,
} from '../../../../../../models/hud/corporations/tabs/logs/logsInterfaces';
import { transformDateFromString } from '../../../../../common/date';

const _convertLogFromServer = (serverLog: ServerLogInterface): SingleLogInterface => {
  return {
    date: transformDateFromString(serverLog.Date),
    executor: serverLog.Executor,
    action: serverLog.Action,
    type: serverLog.Type,
    description: serverLog.Description,
  };
};

let corporations_openLogs: (jsonData: string) => LogsInitialStateInterface;
corporations_openLogs = (jsonData) => {
  const parsedData = JSON.parse(jsonData);

  return {
    currentPage: parsedData.CurrentPage,
    pagesCount: parsedData.PagesCount,
    logs: parsedData.Logs.slice(0, 10).map((log) => _convertLogFromServer(log)),
  };
};

let corporations_logs_openPage: (jsonData: string) => LogsInitialStateInterface;
corporations_logs_openPage = (jsonData) => {
  const parsedData = JSON.parse(jsonData);

  return {
    currentPage: parsedData.CurrentPage,
    pagesCount: parsedData.PagesCount,
    logs: parsedData.Logs.slice(0, 10).map((log) => _convertLogFromServer(log)),
  };
};

export { corporations_openLogs, corporations_logs_openPage };
