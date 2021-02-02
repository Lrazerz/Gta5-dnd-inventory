import {
  CorporationsTasksTabsEnumRus
} from "../../../../../../hud/models/corporations/tabs/tasks/tasksEnums";
import {CorporationsTabsDict} from "../../../../../../hud/models/corporations/enums";

const mpTrigger_corporations_tasks_openTab = (tab: CorporationsTasksTabsEnumRus) => {
  console.log('cef_cl_corporations_tasks_openTab', CorporationsTabsDict.tasks, tab);
  try {
    const data = JSON.stringify({
      OpenedTab: CorporationsTabsDict.tasks,
      OpenedSubTab: tab
    });
    // @ts-ignore
    mp.trigger('cef_cl_corporations_tasks_openTab', data);
  } catch (e) {}
}

export {
  mpTrigger_corporations_tasks_openTab
}