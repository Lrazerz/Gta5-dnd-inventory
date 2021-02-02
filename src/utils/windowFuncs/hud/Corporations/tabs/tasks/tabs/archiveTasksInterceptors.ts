import {
  TasksExecutorTypeEnumServer,
  translateTasksExecutorTypeFromServer
} from "../../../../../../../hud/models/corporations/tabs/tasks/tabs/currentTasksEnums";
import {TasksArchiveTasksInitialStateInterface} from "../../../../../../../hud/models/corporations/tabs/tasks/tabs/archiveTasksInterfaces";

let window_corporations_tasks_OpenArchiveTasks: (jsonData: string) => TasksArchiveTasksInitialStateInterface;
window_corporations_tasks_OpenArchiveTasks = (jsonData: string) => {
  const parsedData = JSON.parse(jsonData);

  return {
    tasks: parsedData.Tasks.map(task => ({
      id: task.Id,
      title: task.Title,
      sum: task.Sum,
      executorType: translateTasksExecutorTypeFromServer(TasksExecutorTypeEnumServer[task.ExecutorType]),
      executor: task.Executor,
      description: task.Description,
      appointer: task.Appointer,
      isSuccessful: task.isSuccessful
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
    tasks: parsedData.Tasks.map(task => ({
      id: task.Id,
      title: task.Title,
      sum: task.Sum,
      executorType: translateTasksExecutorTypeFromServer(TasksExecutorTypeEnumServer[task.ExecutorType]),
      executor: task.Executor,
      description: task.Description,
      appointer: task.Appointer,
      isSuccessful: task.isSuccessful
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

