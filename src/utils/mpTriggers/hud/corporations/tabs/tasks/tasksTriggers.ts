import { CorporationsTasksTabsEnumRus } from '../../../../../../models/hud/corporations/tabs/tasks/tasksEnums';
import { CorporationsTabsDict } from '../../../../../../models/hud/corporations/enums';

const mpTrigger_corporations_tasks_openTab = (tab: CorporationsTasksTabsEnumRus) => {
  console.log('cef_cl_corporations_tasks_openTab', CorporationsTabsDict.tasks, tab);
  try {
    const data = JSON.stringify({
      OpenedTab: CorporationsTabsDict.tasks,
      OpenedSubTab: tab,
    });
    mp.trigger('cef_cl_corporations_tasks_openTab', data);
  } catch (e) {}
};

export { mpTrigger_corporations_tasks_openTab };
