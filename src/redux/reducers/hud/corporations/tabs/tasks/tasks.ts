import {CorporationsTasksInitialStateInterface} from "../../../../../../hud/models/corporations/tabs/tasks/tasksInterfaces";
import {CorporationsTasksTabsEnumEng} from "../../../../../../hud/models/corporations/tabs/tasks/tasksEnums";
import {CORPORATIONS_TASKS_OPEN_TAB} from "../../../../../actions/hud/corporations/tabs/tasks/tasksTypes";

const initialState: CorporationsTasksInitialStateInterface = {
  openedTab: CorporationsTasksTabsEnumEng.currentTasks,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CORPORATIONS_TASKS_OPEN_TAB: {
      return {
        ...state,
        openedTab: action.tab
      }
    }
  }
}