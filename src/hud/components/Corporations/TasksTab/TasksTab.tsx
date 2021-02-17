import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CorporationsTasksTabsEnumEng } from '../../../../models/hud/corporations/tabs/tasks/tasksEnums';
import CurrentTasksTab from './CurrentTasks/CurrentTasksTab';
import ArchiveTasksTab from './ArchiveTasks/ArchiveTasksTab';
import { TasksArchiveTasksInitialStateInterface } from '../../../../models/hud/corporations/tabs/tasks/tabs/archiveTasksInterfaces';
import { window_corporations_tasks_openArchiveTasks } from '../../../../utils/windowFuncs/hud/Corporations/tabs/tasks/tabs/archiveTasksInterceptors';
import { tasksArchiveTasksOpenAction } from '../../../../redux/actions/hud/corporations/tabs/tasks/tabs/archiveTasks';
import NewTaskTab from './NewTask/NewTaskTab';

const TasksTab: React.FC = React.memo(() => {
  const dispatch = useDispatch();

  const openedTab = useSelector((state) => state.hud.corporations.tabs.tasks.tasks.openedTab);

  useEffect(() => {
    // @ts-ignore
    if (!window.corporations_tasks_openArchiveTasks) {
      // @ts-ignore
      window.corporations_tasks_openArchiveTasks = (jsonData: string) => {
        const parsedData: TasksArchiveTasksInitialStateInterface = window_corporations_tasks_openArchiveTasks(jsonData);
        dispatch(tasksArchiveTasksOpenAction(parsedData));
      };
    }
    return () => {
      // @ts-ignore
      window.corporations_tasks_openArchiveTasks = null;
    };
  });

  let contentToReturn: JSX.Element;

  switch (openedTab) {
    case CorporationsTasksTabsEnumEng.currentTasks: {
      contentToReturn = <CurrentTasksTab />;
      break;
    }
    case CorporationsTasksTabsEnumEng.newTask: {
      contentToReturn = <NewTaskTab />;
      break;
    }
    case CorporationsTasksTabsEnumEng.archiveTasks: {
      contentToReturn = <ArchiveTasksTab />;
      break;
    }
    default: {
      contentToReturn = <div></div>;
    }
  }

  return contentToReturn;
});

export default TasksTab;
