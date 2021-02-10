import React, {ReactElement, useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import CorporationsTabs from "./CorporationsTabs";
import {CorporationsTabsEnum} from "../../models/corporations/enums";
import PermissionsTab from "./PermissionsTab/PermissionsTab";
import {corporationsOpenPermissionsTab} from "../../../utils/windowFuncs/hud/Corporations/CorporationsInterceptors";
import {permissionsSetRolesPermissions} from "../../../redux/actions/hud/corporations/tabs/permissions/permissions";
import {TreasuryInitialStateInterface} from "../../models/corporations/tabs/treasury/treasuryInterfaces";
import {corporations_openTreasury} from "../../../utils/windowFuncs/hud/Corporations/tabs/treasury/treasuryInterceptors";
import {corporationsTreasuryOpenAction} from "../../../redux/actions/hud/corporations/tabs/treasury/treasury";
import {
  corporationsLogsOpenAction,
  corporationsLogsOpenPageAction
} from "../../../redux/actions/hud/corporations/tabs/logs/logs";
import {
  corporations_logs_openPage,
  corporations_openLogs
} from "../../../utils/windowFuncs/hud/Corporations/tabs/logs/logsInterceptors";
import {LogsInitialStateInterface} from "../../models/corporations/tabs/logs/logsInterfaces";
import {window_corporations_tasks_openCurrentTasks} from "../../../utils/windowFuncs/hud/Corporations/tabs/tasks/tabs/currentTasksInterceptors";
import {TasksCurrentTasksInitialStateInterface} from "../../models/corporations/tabs/tasks/tabs/currentTasksInterfaces";
import {tasksCurrentTasksOpenAction} from "../../../redux/actions/hud/corporations/tabs/tasks/tabs/currentTasks";
import {TasksNewTasksInitialStateInterface} from "../../models/corporations/tabs/tasks/tabs/newTaskInterfaces";
import {window_corporations_tasks_OpenNewTask} from "../../../utils/windowFuncs/hud/Corporations/tabs/tasks/tabs/newTaskInterceptors";
import {tasksNewTaskOpenAction} from "../../../redux/actions/hud/corporations/tabs/tasks/tabs/newTask";

export interface CorporationsDimensionsInterface {
  width: number;
  height: number;
  topGap: number;
  leftGap: number;
  permissionsContainerWidth: number; // only when permissions opened
  permissionsContainerHeight: number; // only when permissions opened
  permissionsTopGap: number;
  permissionsLeftGap: number;
}

let getDimensions: () => CorporationsDimensionsInterface;
getDimensions = () => {
  let resultDimensions: CorporationsDimensionsInterface = {
    width: 0,
    height: 0,
    permissionsContainerWidth: 0,
    permissionsContainerHeight: 0,
    topGap: 0,
    leftGap: 0,
    permissionsTopGap: 0,
    permissionsLeftGap: 0
  };

  const windowHeight: number = window.innerHeight;
  const windowWidth: number = window.innerWidth;
  const proportions: number = windowWidth / windowHeight;

  if(proportions < 1.78) {
    // 16x9
    resultDimensions.width = windowWidth * 0.7047;
    resultDimensions.height = resultDimensions.width * 0.7036;

    resultDimensions.permissionsContainerWidth = windowWidth * 0.8714;
    resultDimensions.permissionsContainerHeight = resultDimensions.permissionsContainerWidth * 0.5403;
  } else {
    // 17x9, 21x9
    resultDimensions.width = windowWidth * 0.5292;
    resultDimensions.height = resultDimensions.width * 0.7036;
    resultDimensions.permissionsContainerWidth = windowWidth * 0.689;
    resultDimensions.permissionsContainerHeight = resultDimensions.permissionsContainerWidth * 0.5403;
  }

  resultDimensions.topGap = (windowHeight - resultDimensions.height) / 2;
  resultDimensions.leftGap = (windowWidth - resultDimensions.width) / 2;
  resultDimensions.permissionsTopGap = (windowHeight - resultDimensions.permissionsContainerHeight) / 2;
  resultDimensions.permissionsLeftGap = (windowWidth - resultDimensions.permissionsContainerWidth) / 2;

  return resultDimensions;
}

// also can be opened permissions
const Corporations = React.memo(() => {

  const dispatch = useDispatch();

  const [dimensions, setDimensions]: [CorporationsDimensionsInterface, any] = useState(null);

  const openedTab: CorporationsTabsEnum = useSelector(({hud}) =>
    hud.corporations.corporations.openedTab);

  if(!dimensions) {
    const dimensions: CorporationsDimensionsInterface = getDimensions();
    setDimensions(dimensions);
  }

  useEffect(() => {
    // @ts-ignore
    if(!window.corporations_openPermissions) {
      // @ts-ignore
      window.corporations_openPermissions = (dataJSON: string) => {
        const parsedData = corporationsOpenPermissionsTab(dataJSON);
        dispatch(permissionsSetRolesPermissions(parsedData.roles, parsedData.selectedRoleInfo.title,
          parsedData.selectedRoleInfo.commonPermissionsSets));
      }
    }
    // @ts-ignore
    if(!window.corporations_openTreasury) {
      // @ts-ignore
      window.corporations_openTreasury = (jsonData: string) => {
        const parsedData: TreasuryInitialStateInterface = corporations_openTreasury(jsonData);
        dispatch(corporationsTreasuryOpenAction(parsedData));
      }
    }
    // @ts-ignore
    if(!window.corporations_openLogs) {
      // @ts-ignore
      window.corporations_openLogs = (jsonData: string) => {
        const parsedData: LogsInitialStateInterface = corporations_openLogs(jsonData);
        dispatch(corporationsLogsOpenAction(parsedData));
      }
    }
    // @ts-ignore
    if(!window.corporations_tasks_openCurrentTasks) {
      // @ts-ignore
      window.corporations_tasks_openCurrentTasks = (jsonData: string) => {
        const parsedData: TasksCurrentTasksInitialStateInterface = window_corporations_tasks_openCurrentTasks(jsonData);
        dispatch(tasksCurrentTasksOpenAction(parsedData));
      }
    }
    // @ts-ignore
    if(!window.corporations_tasks_openNewTask) {
      // @ts-ignore
      window.corporations_tasks_openNewTask = (jsonData: string) => {
        const parsedData: TasksNewTasksInitialStateInterface = window_corporations_tasks_OpenNewTask(jsonData);
        dispatch(tasksNewTaskOpenAction(parsedData));
      }
    }
    return () => {
      // @ts-ignore
      window.corporations_openPermissions = null;
      // @ts-ignore
      window.corporations_openTreasury = null;
      // @ts-ignore
      window.corporations_openLogs = null;
      // @ts-ignore
      window.corporations_tasks_openCurrentTasks = null;
      // @ts-ignore
      window.corporations_tasks_openNewTask = null;
    }
  }, []);

  let contentToReturn: ReactElement;

  if(openedTab === CorporationsTabsEnum.permissions) {
    const dimensionsToTab = {
      width: dimensions ? dimensions.permissionsContainerWidth : 0,
      height: dimensions ? dimensions.permissionsContainerHeight : 0,
      topGap: dimensions ? dimensions.permissionsTopGap : 0,
      leftGap: dimensions ? dimensions.permissionsLeftGap : 0
    }
    contentToReturn = <PermissionsTab dimensions={dimensionsToTab}/>
  } else {
    const dimensionsToTabs = {
      width: dimensions ? dimensions.width : 0,
      height: dimensions ? dimensions.height : 0,
      topGap: dimensions ? dimensions.topGap : 0,
      leftGap: dimensions ? dimensions.leftGap : 0
    }
    contentToReturn = <CorporationsTabs openedTab={openedTab} dimensions={dimensionsToTabs}/>
  }

  return contentToReturn;
});

export default Corporations;