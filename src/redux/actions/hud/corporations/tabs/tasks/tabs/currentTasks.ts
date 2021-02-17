import {
  TasksCurrentTasksInitialStateInterface,
  TasksSingleTaskInterface,
} from '../../../../../../../models/hud/corporations/tabs/tasks/tabs/currentTasksInterfaces';
import {
  TASKS_CURRENT_TASKS_CHANGE_PAGE,
  TASKS_CURRENT_TASKS_COMPLETE,
  TASKS_CURRENT_TASKS_OPEN,
} from './currentTasksTypes';
import {
  mpTrigger_tasks_currentTasks_changePage,
  mpTrigger_tasks_currentTasks_completeTask,
  mpTrigger_tasks_currentTasks_removeTask,
} from '../../../../../../../utils/mpTriggers/hud/corporations/tabs/tasks/tabs/currentTasksTriggers';

const tasksCurrentTasksOpenAction = (currentTasksData: TasksCurrentTasksInitialStateInterface) => {
  return { type: TASKS_CURRENT_TASKS_OPEN, currentTasksData };
};

const tasksCurrentTasksOpenPageAction = (currentTasksData: TasksCurrentTasksInitialStateInterface) => {
  return (dispatch, getState) => {
    const currentPage = getState().hud.corporations.tabs.tasks.tabs.current.currentPage;
    if (currentPage !== currentTasksData.currentPage) {
      console.warn('[forb] current page doesnt match');
      return;
    }
    dispatch({ type: TASKS_CURRENT_TASKS_OPEN, currentTasksData });
  };
};

const tasksCurrentTasksChangePageAction = (pageNumber: number, lastTask: TasksSingleTaskInterface) => {
  return (dispatch) => {
    dispatch({ type: TASKS_CURRENT_TASKS_CHANGE_PAGE, pageNumber });
    mpTrigger_tasks_currentTasks_changePage(pageNumber, lastTask);
  };
};

const _removeCurrentTaskFromList = (taskId: string) => {
  return { type: TASKS_CURRENT_TASKS_COMPLETE, taskId };
};

const tasksCurrentTasksCompleteAction = (taskId, isSuccessful: boolean) => {
  return (dispatch) => {
    dispatch(_removeCurrentTaskFromList(taskId));
    mpTrigger_tasks_currentTasks_completeTask(taskId, isSuccessful);
  };
};

const tasksCurrentTasksRemoveAction = (taskId) => {
  return (dispatch) => {
    dispatch(_removeCurrentTaskFromList(taskId));
    mpTrigger_tasks_currentTasks_removeTask(taskId);
  };
};

export {
  tasksCurrentTasksOpenAction,
  tasksCurrentTasksOpenPageAction,
  tasksCurrentTasksChangePageAction,
  tasksCurrentTasksCompleteAction,
  tasksCurrentTasksRemoveAction,
};
