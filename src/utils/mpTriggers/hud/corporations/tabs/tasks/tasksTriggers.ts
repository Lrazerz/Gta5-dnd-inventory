import {
  CorporationsTasksTabsEnumEng,
  CorporationsTasksTabsEnumRus,
  translateTasksTabToServer,
} from '../../../../../../models/hud/corporations/tabs/tasks/tasksEnums';
import { CorporationsTabsDict } from '../../../../../../models/hud/corporations/enums';

const mpTrigger_corporations_tasks_openTab = (tab: CorporationsTasksTabsEnumEng) => {
  try {
    const data = JSON.stringify({
      OpenedTab: CorporationsTabsDict.tasks,
      OpenedSubTab: translateTasksTabToServer(tab),
    });
    console.log('cef_cl_corporations_tasks_openTab', CorporationsTabsDict.tasks, translateTasksTabToServer(tab));
    mp.trigger('cef_cl_corporations_tasks_openTab', data);
  } catch (e) {}
};

export { mpTrigger_corporations_tasks_openTab };
