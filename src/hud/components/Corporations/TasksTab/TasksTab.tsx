import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CorporationsTasksTabsEnumEng} from "../../../models/corporations/tabs/tasks/tasksEnums";
import CurrentTasksTab from "./CurrentTasks/CurrentTasksTab";
import ArchiveTasksTab from "./ArchiveTasks/ArchiveTasksTab";
import {TasksArchiveTasksInitialStateInterface} from "../../../models/corporations/tabs/tasks/tabs/archiveTasksInterfaces";
import {window_corporations_tasks_OpenArchiveTasks} from "../../../../utils/windowFuncs/hud/Corporations/tabs/tasks/tabs/archiveTasksInterceptors";
import {tasksArchiveTasksOpenAction} from "../../../../redux/actions/hud/corporations/tabs/tasks/tabs/archiveTasks";

interface Props {
}

const TasksTab: React.FC<Props> = React.memo(() => {

  const dispatch = useDispatch();

  const openedTab = useSelector(state => state.hud.corporations.tabs.tasks.tasks.openedTab);

  useEffect(() => {
    // @ts-ignore
    if(!window.corporations_tasks_openArchiveTasks) {
      // @ts-ignore
      window.corporations_tasks_openArchiveTasks = (jsonData: string) => {
        const parsedData: TasksArchiveTasksInitialStateInterface = window_corporations_tasks_OpenArchiveTasks(jsonData);
        console.log('[TasksTab] corporations_tasks_openArchiveTasks', parsedData);
        dispatch(tasksArchiveTasksOpenAction(parsedData));
      }
    }
    return () => {
      // @ts-ignore
      window.corporations_tasks_openArchiveTasks = null;
    }
  })

  let contentToReturn: JSX.Element;

  switch(openedTab) {
    case CorporationsTasksTabsEnumEng.currentTasks: {
      contentToReturn = <CurrentTasksTab />;
      break;
    }
    case CorporationsTasksTabsEnumEng.newTask: {
      contentToReturn = <div></div>;
      break;
    }
    case CorporationsTasksTabsEnumEng.archiveTasks: {
      contentToReturn = <ArchiveTasksTab/>;
      break;
    }
    default: {
      contentToReturn = <div></div>;
    }
  }

  return contentToReturn;

});

export default TasksTab;