import { LogsInitialStateInterface } from '../../../../../../models/hud/corporations/tabs/logs/logsInterfaces';

let corporations_openLogs: (jsonData: string) => LogsInitialStateInterface;
corporations_openLogs = (jsonData) => {
  const parsedData = JSON.parse(jsonData);

  return {
    currentPage: parsedData.CurrentPage,
    pagesCount: parsedData.PagesCount,
    logs: parsedData.Logs.slice(0, 10).map((log) => ({
      executor: log.Executor,
      action: log.Action,
      type: log.Type,
      description: log.Description,
    })),
  };
};

let corporations_logs_openPage: (jsonData: string) => LogsInitialStateInterface;
corporations_logs_openPage = (jsonData) => {
  const parsedData = JSON.parse(jsonData);

  return {
    currentPage: parsedData.CurrentPage,
    pagesCount: parsedData.PagesCount,
    logs: parsedData.Logs.slice(0, 10).map((log) => ({
      executor: log.Executor,
      action: log.Action,
      type: log.Type,
      description: log.Description,
    })),
  };
};

export { corporations_openLogs, corporations_logs_openPage };
