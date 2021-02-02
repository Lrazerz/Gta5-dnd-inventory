import {TasksNewTaskInterface} from "../../../../../../../hud/models/corporations/tabs/tasks/tabs/newTaskInterfaces";
import {CorporationsTabsDict} from "../../../../../../../hud/models/corporations/enums";
import {
  CorporationsTasksTabsEnumEng,
  translateTasksTabToServer
} from "../../../../../../../hud/models/corporations/tabs/tasks/tasksEnums";
import {
  translateTasksExecutorTypeToServer
} from "../../../../../../../hud/models/corporations/tabs/tasks/tabs/currentTasksEnums";

const mpTrigger_tasks_newTask_addTask = (task: TasksNewTaskInterface) => {
  console.log('cef_cl_tasks_newTask_addTask', CorporationsTabsDict.tasks,
    translateTasksTabToServer(CorporationsTasksTabsEnumEng.currentTasks), task);
  try {
    const data = JSON.stringify({
      OpenedTab: CorporationsTabsDict.tasks,
      OpenedSubTab: translateTasksTabToServer(CorporationsTasksTabsEnumEng.currentTasks),
      Task: {
        Title: task.title,
        Sum: task.sum,
        ExecutorType: translateTasksExecutorTypeToServer(task.executorType),
        Executor: task.executor,
        Description: task.description
      }
    })
    // @ts-ignore
    mp.trigger('cef_cl_tasks_newTask_addTask', data);
  } catch (e) {}
}

export {
  mpTrigger_tasks_newTask_addTask
}