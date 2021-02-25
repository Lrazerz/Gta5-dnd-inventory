import {
  TasksNewTaskInterface,
  TasksNewTasksInitialStateInterface,
} from '../../../../../../../models/hud/corporations/tabs/tasks/tabs/newTaskInterfaces';
import { TASKS_NEW_TASK_OPEN } from './newTaskTypes';
import { mpTrigger_tasks_newTask_addTask } from '../../../../../../../utils/mpTriggers/hud/corporations/tabs/tasks/tabs/newTaskTriggers';
import { CORPORATIONS_TASKS_OPEN_TAB } from '../tasksTypes';
import { CorporationsTasksTabsEnumEng } from '../../../../../../../models/hud/corporations/tabs/tasks/tasksEnums';
import { mpTrigger_corporations_tasks_openTab } from '../../../../../../../utils/mpTriggers/hud/corporations/tabs/tasks/tasksTriggers';

const tasksNewTaskOpenAction = (newTaskData: TasksNewTasksInitialStateInterface) => {
  return { type: TASKS_NEW_TASK_OPEN, newTaskData };
};

const _tasksNewTaskGoBackAction = () => {
  return {
    type: CORPORATIONS_TASKS_OPEN_TAB,
    tab: CorporationsTasksTabsEnumEng.currentTasks,
  };
};

const tasksNewTaskAddTaskAction = (task: TasksNewTaskInterface) => {
  return (dispatch) => {
    dispatch(_tasksNewTaskGoBackAction());
    mpTrigger_tasks_newTask_addTask(task);
    mpTrigger_corporations_tasks_openTab(CorporationsTasksTabsEnumEng.currentTasks);
  };
};

const tasksNewTaskGoBackAction = () => {
  return _tasksNewTaskGoBackAction();
};

export { tasksNewTaskOpenAction, tasksNewTaskAddTaskAction, tasksNewTaskGoBackAction };
