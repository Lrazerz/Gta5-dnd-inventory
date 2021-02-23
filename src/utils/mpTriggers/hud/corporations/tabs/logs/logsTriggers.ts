import { CorporationsTabsDict } from '../../../../../../models/hud/corporations/enums';
import { LogsSearchByEnumEng } from '../../../../../../models/hud/corporations/tabs/logs/logsEnums';
import { SingleLogInterface } from '../../../../../../models/hud/corporations/tabs/logs/logsInterfaces';

const mpTrigger_corporations_logs_setFilter = (searchBy: LogsSearchByEnumEng, searchText: string) => {
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

const mpTrigger_corporations_logs_changePage = (pageNumber: number, lastLog: SingleLogInterface) => {
  console.log('mpTrigger_corporations_logs_changePage', CorporationsTabsDict.logs, pageNumber, lastLog);
  try {
    const jsonData = JSON.stringify({
      OpenedTab: CorporationsTabsDict.logs,
      PageNumber: pageNumber,
      LastLog: {
        Executor: lastLog.executor,
        Action: lastLog.action,
        Type: lastLog.type,
        Description: lastLog.description,
      },
    });
    mp.trigger('cef_cl_corporations_logs_changePage', jsonData);
  } catch (e) {}
};

export { mpTrigger_corporations_logs_setFilter, mpTrigger_corporations_logs_changePage };
