import { CORPORATIONS_TASKS_OPEN_TAB } from './tasksTypes';
import { CorporationsTasksTabsEnumEng } from '../../../../../../models/hud/corporations/tabs/tasks/tasksEnums';
import { mpTrigger_corporations_tasks_openTab } from '../../../../../../utils/mpTriggers/hud/corporations/tabs/tasks/tasksTriggers';

const corporationsTasksOpenTabAction = (tab: CorporationsTasksTabsEnumEng) => {
  return (dispatch) => {
    dispatch({ type: CORPORATIONS_TASKS_OPEN_TAB, tab });
    mpTrigger_corporations_tasks_openTab(tab);
  };
};

export { corporationsTasksOpenTabAction };
