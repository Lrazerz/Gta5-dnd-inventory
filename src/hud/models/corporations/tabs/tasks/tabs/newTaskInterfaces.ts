// // new task without appointer, isDone
// interface TasksNewTaskInterface {
//   id: string;
//   title: string;
//   sum: number;
//   executorType: TasksExecutorType;
//   executor: string;
//   description: string;
// }
//
// // current or done task
// interface TasksSingleTaskInterface {
//   id: string;
//   title: string;
//   sum: number;
//   executorType: TasksExecutorType;
//   executor: string;
//   description: string;
//   appointer: string;
// }
//
// interface TasksDoneTaskInterface {
//   id: string;
//   title: string;
//   sum: number;
//   executorType: TasksExecutorType;
//   executor: string;
//   description: string;
//   appointer: string;
//   isSuccessful: boolean;
// }

import {TasksExecutorTypeEnum} from "./currentTasksEnums";

interface TasksNewTaskInterface {
  title: string;
  sum: number;
  executorType: TasksExecutorTypeEnum;
  executor: string;
  description: string;
}

interface TasksPotentialExecutorInterface {
  id: string;
  executor: string;
  executorType: TasksExecutorTypeEnum;
}

interface TasksNewTasksInitialStateInterface {
  potentialExecutors: TasksPotentialExecutorInterface[];
  isLoading: boolean;
}

export {
  TasksNewTaskInterface,
  TasksPotentialExecutorInterface,
  TasksNewTasksInitialStateInterface
}