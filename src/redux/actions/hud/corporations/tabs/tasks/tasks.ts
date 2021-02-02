import {CORPORATIONS_TASKS_OPEN_TAB} from "./tasksTypes";
import {
  CorporationsTasksTabsDict,
  CorporationsTasksTabsEnumEng, CorporationsTasksTabsEnumRus
} from "../../../../../../hud/models/corporations/tabs/tasks/tasksEnums";
import {mpTrigger_corporations_tasks_openTab} from "../../../../../../utils/mpTriggers/hud/corporations/tabs/tasks/tasksTriggers";

const corporationsTasksOpenTabAction = (tab: CorporationsTasksTabsEnumEng) => {
  return dispatch => {
    dispatch({type: CORPORATIONS_TASKS_OPEN_TAB, tab});

    let openedTabToServer: CorporationsTasksTabsEnumRus;

    for(const key in CorporationsTasksTabsDict) {
      if(key === CorporationsTasksTabsEnumEng[tab]) {
        // @ts-ignore
        openedTabToServer = CorporationsTasksTabsDict[key];
        break;
      }
    }
    mpTrigger_corporations_tasks_openTab(openedTabToServer);
  }
}

export {
  corporationsTasksOpenTabAction
}