import {TasksCurrentTasksInitialStateInterface} from "../../../../../../../hud/models/corporations/tabs/tasks/tabs/currentTasksInterfaces";
import {
  TASKS_CURRENT_TASKS_CHANGE_PAGE,
  TASKS_CURRENT_TASKS_COMPLETE,
  TASKS_CURRENT_TASKS_OPEN
} from "../../../../../../actions/hud/corporations/tabs/tasks/tabs/currentTasksTypes";
import {CORPORATIONS_TASKS_OPEN_TAB} from "../../../../../../actions/hud/corporations/tabs/tasks/tasksTypes";
import {CorporationsTasksTabsEnumEng} from "../../../../../../../hud/models/corporations/tabs/tasks/tasksEnums";

const initialState: TasksCurrentTasksInitialStateInterface = {
  tasks: [],
  isLoading: false,
  currentPage: 1,
  pagesCount: 1
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CORPORATIONS_TASKS_OPEN_TAB: {
      if(action.tab === CorporationsTasksTabsEnumEng.currentTasks) {
        return {
          ...initialState,
          isLoading: true
        }
      }
      return state;
    }
    case TASKS_CURRENT_TASKS_CHANGE_PAGE: {
      return {
        ...state,
        tasks: [],
        isLoading: true,
        currentPage: action.pageNumber
      }
    }
    case TASKS_CURRENT_TASKS_OPEN: {
      return {
        ...state,
        ...action.currentTasksData
      }
    }
    case TASKS_CURRENT_TASKS_COMPLETE: {
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.taskId)
      }
    }
    default: {
      return state;
    }
  }
}