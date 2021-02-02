import {TasksArchiveTasksInitialStateInterface} from "../../../../../../../hud/models/corporations/tabs/tasks/tabs/archiveTasksInterfaces";
import {CORPORATIONS_TASKS_OPEN_TAB} from "../../../../../../actions/hud/corporations/tabs/tasks/tasksTypes";
import {CorporationsTasksTabsEnumEng} from "../../../../../../../hud/models/corporations/tabs/tasks/tasksEnums";
import {
  TASKS_ARCHIVE_TASKS_CHANGE_PAGE,
  TASKS_ARCHIVE_TASKS_OPEN, TASKS_ARCHIVE_TASKS_REMOVE_TASK
} from "../../../../../../actions/hud/corporations/tabs/tasks/tabs/archiveTasksTypes";

const initialState: TasksArchiveTasksInitialStateInterface = {
  tasks: [],
  isLoading: false,
  currentPage: 1,
  pagesCount: 1
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CORPORATIONS_TASKS_OPEN_TAB: {
      if(action.tab === CorporationsTasksTabsEnumEng.archiveTasks) {
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
    case TASKS_ARCHIVE_TASKS_OPEN: {
      return {
        ...state,
        ...action.archiveTasksData
      }
    }
    case TASKS_ARCHIVE_TASKS_CHANGE_PAGE: {
      return {
        ...state,
        tasks: [],
        isLoading: true,
        currentPage: action.pageNumber
      }
    }
    case TASKS_ARCHIVE_TASKS_REMOVE_TASK: {
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