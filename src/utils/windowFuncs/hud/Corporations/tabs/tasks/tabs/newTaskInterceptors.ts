import { TasksNewTasksInitialStateInterface } from '../../../../../../../models/hud/corporations/tabs/tasks/tabs/newTaskInterfaces';
import {
  TasksExecutorTypeEnumServer,
  translateTasksExecutorTypeFromServer,
} from '../../../../../../../models/hud/corporations/tabs/tasks/tabs/currentTasksEnums';

let window_corporations_tasks_OpenNewTask: (jsonData: string) => TasksNewTasksInitialStateInterface;
window_corporations_tasks_OpenNewTask = (jsonData: string) => {
  const parsedData = JSON.parse(jsonData);

  return {
    potentialExecutors: parsedData.PotentialExecutors.map((executor) => ({
      id: executor.Id,
      executor: executor.Executor,
      executorType: translateTasksExecutorTypeFromServer(TasksExecutorTypeEnumServer[executor.ExecutorType]),
    })),
    isLoading: false,
  };
};

export { window_corporations_tasks_OpenNewTask };
