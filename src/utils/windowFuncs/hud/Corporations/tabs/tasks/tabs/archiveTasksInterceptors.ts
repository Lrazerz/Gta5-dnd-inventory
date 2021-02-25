import {
  TasksExecutorTypeEnumServer,
  translateTasksExecutorTypeFromServer,
} from '../../../../../../../models/hud/corporations/tabs/tasks/tabs/currentTasksEnums';
import { TasksArchiveTasksInitialStateInterface } from '../../../../../../../models/hud/corporations/tabs/tasks/tabs/archiveTasksInterfaces';
import { transformDateFromString } from '../../../../../../common/date';
import { archiveTasksPageSize } from '../../../../../../../constants/hud/corporations/tasks/tasks';

const window_corporations_tasks_openArchiveTasks = (jsonData: string): TasksArchiveTasksInitialStateInterface => {
  const parsedData = JSON.parse(jsonData);

  return {
    tasks: parsedData.Tasks.slice(0, archiveTasksPageSize).map((task) => ({
      id: task.Id,
      title: task.Title,
      date: transformDateFromString(task.Date),
      sum: task.Sum,
      executorType: translateTasksExecutorTypeFromServer(TasksExecutorTypeEnumServer[task.ExecutorType]),
      executor: task.Executor,
      description: task.Description,
      appointer: task.Appointer,
      isSuccessful: task.IsSuccessful,
    })),
    currentPage: parsedData.CurrentPage,
    pagesCount: parsedData.PagesCount,
    isLoading: false,
  };
};

const window_corporations_tasks_archiveTasks_openPage = (jsonData: string): TasksArchiveTasksInitialStateInterface => {
  const parsedData = JSON.parse(jsonData);

  return {
    tasks: parsedData.Tasks.slice(0, archiveTasksPageSize).map((task) => ({
      id: task.Id,
      title: task.Title,
      date: transformDateFromString(task.Date),
      sum: task.Sum,
      executorType: translateTasksExecutorTypeFromServer(TasksExecutorTypeEnumServer[task.ExecutorType]),
      executor: task.Executor,
      description: task.Description,
      appointer: task.Appointer,
      isSuccessful: task.IsSuccessful,
    })),
    currentPage: parsedData.CurrentPage,
    pagesCount: parsedData.PagesCount,
    isLoading: false,
  };
};

export { window_corporations_tasks_openArchiveTasks, window_corporations_tasks_archiveTasks_openPage };
