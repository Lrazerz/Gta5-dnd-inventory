import { CorporationsTabsDict } from '../../../../../../../models/hud/corporations/enums';
import {
  CorporationsTasksTabsEnumEng,
  translateTasksTabToServer,
} from '../../../../../../../models/hud/corporations/tabs/tasks/tasksEnums';
import { TasksSingleTaskInterface } from '../../../../../../../models/hud/corporations/tabs/tasks/tabs/currentTasksInterfaces';
import { translateTasksExecutorTypeToServer } from '../../../../../../../models/hud/corporations/tabs/tasks/tabs/currentTasksEnums';
import { transformDateFromObject } from '../../../../../../common/date';

const mpTrigger_tasks_currentTasks_changePage = (pageNumber: number, lastTask: TasksSingleTaskInterface) => {
  console.log('cef_cl_tasks_currentTasks_changePage', {
    OpenedTab: CorporationsTabsDict.tasks,
    OpenedSubTab: translateTasksTabToServer(CorporationsTasksTabsEnumEng.currentTasks),
    PageNumber: pageNumber,
    LastTask: {
      Id: lastTask.id,
      Title: lastTask.title,
      Date: transformDateFromObject(lastTask.date),
      Sum: lastTask.sum,
      ExecutorType: translateTasksExecutorTypeToServer(lastTask.executorType),
      Executor: lastTask.executor,
      Description: lastTask.description,
      Appointer: lastTask.appointer,
    },
  });
  try {
    const data = JSON.stringify({
      OpenedTab: CorporationsTabsDict.tasks,
      OpenedSubTab: translateTasksTabToServer(CorporationsTasksTabsEnumEng.currentTasks),
      PageNumber: pageNumber,
      LastTask: {
        Id: lastTask.id,
        Title: lastTask.title,
        Date: transformDateFromObject(lastTask.date),
        Sum: lastTask.sum,
        ExecutorType: translateTasksExecutorTypeToServer(lastTask.executorType),
        Executor: lastTask.executor,
        Description: lastTask.description,
        Appointer: lastTask.appointer,
      },
    });
    mp.trigger('cef_cl_tasks_currentTasks_changePage', data);
  } catch (e) {}
};

const mpTrigger_tasks_currentTasks_completeTask = (taskId: string, isSuccessful: boolean) => {
  console.log('cef_cl_tasks_currentTasks_completeTask', {
    OpenedTab: CorporationsTabsDict.tasks,
    OpenedSubTab: translateTasksTabToServer(CorporationsTasksTabsEnumEng.currentTasks),
    TaskId: taskId,
    IsSuccessful: isSuccessful,
  });
  try {
    const data = JSON.stringify({
      OpenedTab: CorporationsTabsDict.tasks,
      OpenedSubTab: translateTasksTabToServer(CorporationsTasksTabsEnumEng.currentTasks),
      TaskId: taskId,
      IsSuccessful: isSuccessful,
    });
    mp.trigger('cef_cl_tasks_currentTasks_completeTask', data);
  } catch (e) {}
};

const mpTrigger_tasks_currentTasks_removeTask = (taskId: string) => {
  console.log(
    'cef_cl_tasks_currentTasks_removeTask',
    CorporationsTabsDict.tasks,
    translateTasksTabToServer(CorporationsTasksTabsEnumEng.currentTasks),
    taskId,
  );
  try {
    const data = JSON.stringify({
      OpenedTab: CorporationsTabsDict.tasks,
      OpenedSubTab: translateTasksTabToServer(CorporationsTasksTabsEnumEng.currentTasks),
      TaskId: taskId,
    });
    mp.trigger('cef_cl_tasks_currentTasks_removeTask', data);
  } catch (e) {}
};

export {
  mpTrigger_tasks_currentTasks_changePage,
  mpTrigger_tasks_currentTasks_completeTask,
  mpTrigger_tasks_currentTasks_removeTask,
};
