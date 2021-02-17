import { TasksExecutorTypeEnum } from './currentTasksEnums';
import { DateObjectInterface } from '../../../../phone/reducerInterfaces';

interface TasksDoneTaskInterface {
  id: string;
  title: string;
  date: DateObjectInterface;
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

export { TasksDoneTaskInterface, TasksArchiveTasksInitialStateInterface };
