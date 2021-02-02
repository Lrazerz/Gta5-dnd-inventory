// new task without appointer, isDone
import {TasksExecutorTypeEnum} from "./currentTasksEnums";

// current or done task
interface TasksSingleTaskInterface {
  id: string;
  title: string;
  sum: number;
  executorType: TasksExecutorTypeEnum;
  executor: string;
  description: string;
  appointer: string;
}

interface TasksCurrentTasksInitialStateInterface {
  tasks: TasksSingleTaskInterface[];
  isLoading: boolean;
  currentPage: number;
  pagesCount: number;
}

export {
  TasksSingleTaskInterface,
  TasksCurrentTasksInitialStateInterface
}