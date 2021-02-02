import {TasksExecutorTypeEnum} from "./currentTasksEnums";

interface TasksDoneTaskInterface {
  id: string;
  title: string;
  sum: number;
  executorType: TasksExecutorTypeEnum;
  executor: string;
  description: string;
  appointer: string;
  isSuccessful: boolean;
}

interface TasksArchiveTasksInitialStateInterface {
  tasks: TasksDoneTaskInterface[];
  isLoading: boolean;
  currentPage: number;
  pagesCount: number;
}

export {
  TasksDoneTaskInterface,
  TasksArchiveTasksInitialStateInterface
}