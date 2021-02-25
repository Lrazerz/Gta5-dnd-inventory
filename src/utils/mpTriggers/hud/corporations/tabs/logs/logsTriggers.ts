import { CorporationsTabsDict } from '../../../../../../models/hud/corporations/enums';
import { LogsSearchByEnumEng } from '../../../../../../models/hud/corporations/tabs/logs/logsEnums';
import {
  ServerLogInterface,
  SingleLogInterface,
} from '../../../../../../models/hud/corporations/tabs/logs/logsInterfaces';
import { transformDateFromObject } from '../../../../../common/date';

const _convertLogToServer = (log: SingleLogInterface): ServerLogInterface => {
  return {
    Date: transformDateFromObject(log.date),
    Executor: log.executor,
    Action: log.action,
    Type: log.type,
    Description: log.description,
  };
};

const mpTrigger_corporations_logs_setFilter = (searchBy: LogsSearchByEnumEng, searchText: string): void => {
  console.log('mpTrigger_corporations_logs_setFilter', CorporationsTabsDict.logs, searchBy, searchText);
  try {
    const jsonData = JSON.stringify({
      OpenedTab: CorporationsTabsDict.logs,
      SearchBy: searchBy,
      searchText: searchText,
    });
    mp.trigger('cef_cl_corporations_logs_setFilter', jsonData);
  } catch (e) {}
};

const mpTrigger_corporations_logs_changePage = (pageNumber: number, lastLog: SingleLogInterface): void => {
  console.log('mpTrigger_corporations_logs_changePage', CorporationsTabsDict.logs, pageNumber, lastLog);
  try {
    const jsonData = JSON.stringify({
      OpenedTab: CorporationsTabsDict.logs,
      PageNumber: pageNumber,
      LastLog: _convertLogToServer(lastLog),
    });
    mp.trigger('cef_cl_corporations_logs_changePage', jsonData);
  } catch (e) {}
};

export { mpTrigger_corporations_logs_setFilter, mpTrigger_corporations_logs_changePage };
