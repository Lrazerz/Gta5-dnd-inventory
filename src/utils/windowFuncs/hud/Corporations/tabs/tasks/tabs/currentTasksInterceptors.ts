import {TasksCurrentTasksInitialStateInterface} from "../../../../../../../hud/models/corporations/tabs/tasks/tabs/currentTasksInterfaces";
import {
  TasksExecutorTypeEnumServer,
  translateTasksExecutorTypeFromServer,
} from "../../../../../../../hud/models/corporations/tabs/tasks/tabs/currentTasksEnums";

let window_corporations_tasks_OpenCurrentTasks: (jsonData: string) => TasksCurrentTasksInitialStateInterface;
window_corporations_tasks_OpenCurrentTasks = (jsonData: string) => {
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
    })),
    currentPage: parsedData.CurrentPage,
    pagesCount: parsedData.PagesCount,
    isLoading: false
  }
}

let window_corporations_tasks_currentTasks_openPage: (jsonData: string) => TasksCurrentTasksInitialStateInterface;
window_corporations_tasks_currentTasks_openPage = (jsonData: string) => {
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
    })),
    currentPage: parsedData.CurrentPage,
    pagesCount: parsedData.PagesCount,
    isLoading: false
  }
}

export {
  window_corporations_tasks_OpenCurrentTasks,
  window_corporations_tasks_currentTasks_openPage
}