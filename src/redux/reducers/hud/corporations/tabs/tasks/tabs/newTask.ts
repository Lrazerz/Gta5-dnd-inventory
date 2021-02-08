import {TasksNewTasksInitialStateInterface} from "../../../../../../../hud/models/corporations/tabs/tasks/tabs/newTaskInterfaces";
import {TASKS_NEW_TASK_OPEN} from "../../../../../../actions/hud/corporations/tabs/tasks/tabs/newTaskTypes";
import {CORPORATIONS_TASKS_OPEN_TAB} from "../../../../../../actions/hud/corporations/tabs/tasks/tasksTypes";
import {CorporationsTasksTabsEnumEng} from "../../../../../../../hud/models/corporations/tabs/tasks/tasksEnums";

const initialState: TasksNewTasksInitialStateInterface = {
  potentialExecutors: [],
  isLoading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CORPORATIONS_TASKS_OPEN_TAB: {
      if(action.tab === CorporationsTasksTabsEnumEng.newTask) {
        return {
          ...initialState,
          isLoading: true
        }
      } else if (action.tab === CorporationsTasksTabsEnumEng.currentTasks) {
        // go back
        return initialState;
      }
      return state;
    }
    case TASKS_NEW_TASK_OPEN: {
      return {
        ...state,
        ...action.newTaskData
      }
    }
    default: {
      return state;
    }
  }
}