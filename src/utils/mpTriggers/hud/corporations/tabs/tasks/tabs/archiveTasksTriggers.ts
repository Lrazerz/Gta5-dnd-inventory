import { TasksDoneTaskInterface } from '../../../../../../../models/hud/corporations/tabs/tasks/tabs/archiveTasksInterfaces';
import { CorporationsTabsDict } from '../../../../../../../models/hud/corporations/enums';
import {
  CorporationsTasksTabsEnumEng,
  translateTasksTabToServer,
} from '../../../../../../../models/hud/corporations/tabs/tasks/tasksEnums';
import { translateTasksExecutorTypeToServer } from '../../../../../../../models/hud/corporations/tabs/tasks/tabs/currentTasksEnums';
import { transformDateFromObject } from '../../../../../../common/date';

const mpTrigger_tasks_archiveTasks_changePage = (pageNumber: number, lastTask: TasksDoneTaskInterface) => {
  console.log('cef_cl_tasks_archiveTasks_changePage', {
    OpenedTab: CorporationsTabsDict.tasks,
    OpenedSubTab: translateTasksTabToServer(CorporationsTasksTabsEnumEng.archiveTasks),
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
      IsSuccessful: lastTask.isSuccessful,
    },
  });

  try {
    const data = JSON.stringify({
      OpenedTab: CorporationsTabsDict.tasks,
      OpenedSubTab: translateTasksTabToServer(CorporationsTasksTabsEnumEng.archiveTasks),
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
        IsSuccessful: lastTask.isSuccessful,
      },
    });
    mp.trigger('cef_cl_tasks_archiveTasks_changePage', data);
  } catch (e) {}
};

const mpTrigger_tasks_archiveTasks_removeTask = (taskId: string) => {
  console.log(
    'cef_cl_tasks_archiveTasks_removeTask',
    CorporationsTabsDict.tasks,
    translateTasksTabToServer(CorporationsTasksTabsEnumEng.archiveTasks),
    taskId,
  );
  try {
    const data = JSON.stringify({
      OpenedTab: CorporationsTabsDict.tasks,
      OpenedSubTab: translateTasksTabToServer(CorporationsTasksTabsEnumEng.archiveTasks),
      TaskId: taskId,
    });
    mp.trigger('cef_cl_tasks_archiveTasks_removeTask', data);
  } catch (e) {}
};

export { mpTrigger_tasks_archiveTasks_changePage, mpTrigger_tasks_archiveTasks_removeTask };
