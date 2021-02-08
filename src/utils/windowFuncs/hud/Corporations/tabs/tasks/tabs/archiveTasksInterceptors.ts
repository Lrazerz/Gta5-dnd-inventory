import {
  TasksExecutorTypeEnumServer,
  translateTasksExecutorTypeFromServer
} from "../../../../../../../hud/models/corporations/tabs/tasks/tabs/currentTasksEnums";
import {TasksArchiveTasksInitialStateInterface} from "../../../../../../../hud/models/corporations/tabs/tasks/tabs/archiveTasksInterfaces";
import {transformDateFromString} from "../../../../../../common/date";
import {archiveTasksPageSize} from "../../../../../../../constants/hud/corporations/tabs/tasks";

let window_corporations_tasks_OpenArchiveTasks: (jsonData: string) => TasksArchiveTasksInitialStateInterface;
window_corporations_tasks_OpenArchiveTasks = (jsonData: string) => {
  const parsedData = JSON.parse(jsonData);

  return {
    tasks: parsedData.Tasks.slice(0, archiveTasksPageSize).map(task => ({
      id: task.Id,
      title: task.Title,
      date: transformDateFromString(task.Date),
      sum: task.Sum,
      executorType: translateTasksExecutorTypeFromServer(TasksExecutorTypeEnumServer[task.ExecutorType]),
      executor: task.Executor,
      description: task.Description,
      appointer: task.Appointer,
      isSuccessful: task.IsSuccessful
    })),
    currentPage: parsedData.CurrentPage,
    pagesCount: parsedData.PagesCount,
    isLoading: false
  }
}

let window_corporations_tasks_archiveTasks_openPage: (jsonData: string) => TasksArchiveTasksInitialStateInterface;
window_corporations_tasks_archiveTasks_openPage = (jsonData: string) => {
  const parsedData = JSON.parse(jsonData);

  return {
    tasks: parsedData.Tasks.slice(0, archiveTasksPageSize).map(task => ({
      id: task.Id,
      title: task.Title,
      date: transformDateFromString(task.Date),
      sum: task.Sum,
      executorType: translateTasksExecutorTypeFromServer(TasksExecutorTypeEnumServer[task.ExecutorType]),
      executor: task.Executor,
      description: task.Description,
      appointer: task.Appointer,
      isSuccessful: task.IsSuccessful
    })),
    currentPage: parsedData.CurrentPage,
    pagesCount: parsedData.PagesCount,
    isLoading: false
  }
}

export {
  window_corporations_tasks_OpenArchiveTasks,
  window_corporations_tasks_archiveTasks_openPage
}

