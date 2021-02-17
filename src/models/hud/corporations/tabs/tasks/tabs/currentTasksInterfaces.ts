// new task without appointer, isDone
import { TasksExecutorTypeEnum } from './currentTasksEnums';
import { DateObjectInterface } from '../../../../phone/reducerInterfaces';

// current or done task
interface TasksSingleTaskInterface {
  id: string;
  title: string;
  date: DateObjectInterface;
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

export { TasksSingleTaskInterface, TasksCurrentTasksInitialStateInterface };
