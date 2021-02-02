import {CorporationsTabsDict} from "../../../../../../../hud/models/corporations/enums";
import {
  CorporationsTasksTabsEnumEng,
  translateTasksTabToServer
} from "../../../../../../../hud/models/corporations/tabs/tasks/tasksEnums";
import {TasksSingleTaskInterface} from "../../../../../../../hud/models/corporations/tabs/tasks/tabs/currentTasksInterfaces";
import {translateTasksExecutorTypeToServer} from "../../../../../../../hud/models/corporations/tabs/tasks/tabs/currentTasksEnums";


const mpTrigger_tasks_currentTasks_changePage = (pageNumber: number, lastTask: TasksSingleTaskInterface) => {
  console.log('cef_cl_tasks_currentTasks_changePage', CorporationsTabsDict.tasks,
    translateTasksTabToServer(CorporationsTasksTabsEnumEng.currentTasks), pageNumber, lastTask);
  try {
    const data = JSON.stringify({
      OpenedTab: CorporationsTabsDict.tasks,
      OpenedSubTab: translateTasksTabToServer(CorporationsTasksTabsEnumEng.currentTasks),
      PageNumber: pageNumber,
      LastTask: {
        "Id": lastTask.id,
        "Title": lastTask.title,
        "Sum": lastTask.sum,
        "ExecutorType": translateTasksExecutorTypeToServer(lastTask.executorType),
        "Executor": lastTask.executor,
        "Description": lastTask.description,
        "Appointer": lastTask.appointer
      }
    });
    // @ts-ignore
    mp.trigger('cef_cl_tasks_currentTasks_changePage', data);
  } catch (e) {}
}

const mpTrigger_tasks_currentTasks_completeTask = (taskId: string, isSuccessful: boolean) => {
  console.log('cef_cl_tasks_currentTasks_completeTask', CorporationsTabsDict.tasks,
    translateTasksTabToServer(CorporationsTasksTabsEnumEng.currentTasks), taskId);
  try {
    const data = JSON.stringify({
      OpenedTab: CorporationsTabsDict.tasks,
      OpenedSubTab: translateTasksTabToServer(CorporationsTasksTabsEnumEng.currentTasks),
      TaskId: taskId,
      IsSuccessful: isSuccessful
    })
    // @ts-ignore
    mp.trigger('cef_cl_tasks_currentTasks_completeTask', data);
  } catch (e) {}
}

const mpTrigger_tasks_currentTasks_removeTask = (taskId: string) => {
  console.log('cef_cl_tasks_currentTasks_removeTask', CorporationsTabsDict.tasks,
    translateTasksTabToServer(CorporationsTasksTabsEnumEng.currentTasks), taskId);
  try {
    const data = JSON.stringify({
      OpenedTab: CorporationsTabsDict.tasks,
      OpenedSubTab: translateTasksTabToServer(CorporationsTasksTabsEnumEng.currentTasks),
      TaskId: taskId,
    })
    // @ts-ignore
    mp.trigger('cef_cl_tasks_currentTasks_removeTask', data);
  } catch (e) {}
}

export {
  mpTrigger_tasks_currentTasks_changePage,
  mpTrigger_tasks_currentTasks_completeTask,
  mpTrigger_tasks_currentTasks_removeTask
}