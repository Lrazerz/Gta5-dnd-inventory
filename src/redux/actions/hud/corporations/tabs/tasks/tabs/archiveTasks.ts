import {
  TasksArchiveTasksInitialStateInterface,
  TasksDoneTaskInterface,
} from '../../../../../../../models/hud/corporations/tabs/tasks/tabs/archiveTasksInterfaces';
import {
  TASKS_ARCHIVE_TASKS_CHANGE_PAGE,
  TASKS_ARCHIVE_TASKS_OPEN,
  TASKS_ARCHIVE_TASKS_REMOVE_TASK,
} from './archiveTasksTypes';
import {
  mpTrigger_tasks_archiveTasks_changePage,
  mpTrigger_tasks_archiveTasks_removeTask,
} from '../../../../../../../utils/mpTriggers/hud/corporations/tabs/tasks/tabs/archiveTasksTriggers';

const tasksArchiveTasksOpenAction = (archiveTasksData: TasksArchiveTasksInitialStateInterface) => {
  return { type: TASKS_ARCHIVE_TASKS_OPEN, archiveTasksData };
};

const tasksArchiveTasksOpenPageAction = (archiveTasksData: TasksArchiveTasksInitialStateInterface) => {
  return (dispatch, getState) => {
    const currentPage = getState().hud.corporations.tabs.tasks.tabs.archive.currentPage;
    if (currentPage !== archiveTasksData.currentPage) {
      console.warn('[forb] current page doesnt match');
      return;
    }
    dispatch({ type: TASKS_ARCHIVE_TASKS_OPEN, archiveTasksData });
  };
};

const tasksArchiveTasksChangePageAction = (pageNumber: number, lastTask: TasksDoneTaskInterface) => {
  return (dispatch) => {
    dispatch({ type: TASKS_ARCHIVE_TASKS_CHANGE_PAGE, pageNumber });
    mpTrigger_tasks_archiveTasks_changePage(pageNumber, lastTask);
  };
};

const tasksArchiveTasksRemoveTaskAction = (taskId: string) => {
  return (dispatch) => {
    dispatch({ type: TASKS_ARCHIVE_TASKS_REMOVE_TASK, taskId });
    mpTrigger_tasks_archiveTasks_removeTask(taskId);
  };
};

export {
  tasksArchiveTasksOpenAction,
  tasksArchiveTasksOpenPageAction,
  tasksArchiveTasksChangePageAction,
  tasksArchiveTasksRemoveTaskAction,
};
