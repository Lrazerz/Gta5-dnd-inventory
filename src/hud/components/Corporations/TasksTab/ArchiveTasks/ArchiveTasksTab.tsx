import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import classes from '../../../../../styles/hud/components/Corporations/TasksTab/ArchiveTasksTab/ArchiveTasksTab.module.scss';
import {
  TasksSingleTaskInterface
} from "../../../../models/corporations/tabs/tasks/tabs/currentTasksInterfaces";
import {window_corporations_tasks_archiveTasks_openPage} from "../../../../../utils/windowFuncs/hud/Corporations/tabs/tasks/tabs/archiveTasksInterceptors";
import {
  tasksArchiveTasksChangePageAction,
  tasksArchiveTasksOpenPageAction
} from "../../../../../redux/actions/hud/corporations/tabs/tasks/tabs/archiveTasks";
import {
  TasksArchiveTasksInitialStateInterface,
  TasksDoneTaskInterface
} from "../../../../models/corporations/tabs/tasks/tabs/archiveTasksInterfaces";
import {usePagination} from "react-pagination-hook";
import {tasksCurrentTasksChangePageAction} from "../../../../../redux/actions/hud/corporations/tabs/tasks/tabs/currentTasks";
import {CorporationsTasksTabsEnumEng} from "../../../../models/corporations/tabs/tasks/tasksEnums";
import {corporationsTasksOpenTabAction} from "../../../../../redux/actions/hud/corporations/tabs/tasks/tasks";
import CurrentTasksTitleSearch from "../CurrentTasks/CurrentTasksTitleSearch";
import CorporationsButton from "../../CorporationsButton";
import newTaskImg from "../../../../../assets/hud/images/components/Corporations/tabs/tasks/newTask.svg";
import tasksArchiveImg from "../../../../../assets/hud/images/components/Corporations/tabs/tasks/tasksArchive.svg";
import CurrentTasksList from "../CurrentTasks/CurrentTasksList";
import Pagination from "../../../common/Pagination/Pagination";
import LoadingIndicator from "../../../common/LoadingIndicator/LoadingIndicator";
import ArchiveTasksTitleSearch from "./ArchiveTasksTitleSearch";
import ArchiveTasksList from "./ArchiveTasksList";

interface Props {

}

const ArchiveTasksTab: React.FC<Props> = React.memo(() => {

  const dispatch = useDispatch();

  const archiveTasks: TasksDoneTaskInterface[] =
    useSelector(state => state.hud.corporations.tabs.tasks.tabs.archive.tasks);
  const currentPage: number = useSelector(state => state.hud.corporations.tabs.tasks.tabs.archive.currentPage);
  const pagesCount: number = useSelector(state => state.hud.corporations.tabs.tasks.tabs.archive.pagesCount);
  const isLoading: number = useSelector(state => state.hud.corporations.tabs.tasks.tabs.archive.isLoading);

  useEffect(() => {
    // @ts-ignore
    if(!window.corporations_tasks_archiveTasks_openPage) {
      // @ts-ignore
      window.corporations_tasks_archiveTasks_openPage = (jsonData: string) => {
        const parsedData: TasksArchiveTasksInitialStateInterface = window_corporations_tasks_archiveTasks_openPage(jsonData);
        dispatch(tasksArchiveTasksOpenPageAction(parsedData));
      }
    }
    return () => {
      // @ts-ignore
      window.corporations_tasks_archiveTasks_openPage = null;
    }
  }, []);

  const paginationOptions = usePagination({
    initialPage: currentPage,
    numberOfPages: pagesCount,
    maxButtons: 3,
  });

  const goToPageHandler = (pageNumber) => {
    if(paginationOptions.activePage === pageNumber || isLoading) {
      return;
    }
    paginationOptions.goToPage(pageNumber);
    dispatch(tasksArchiveTasksChangePageAction(pageNumber, archiveTasks[archiveTasks.length - 1]));
  }

  const backToCurrentTasksHandler = (tab: CorporationsTasksTabsEnumEng) => {
    dispatch(corporationsTasksOpenTabAction(tab));
  }

  const paginationOptionsToPass = {
    ...paginationOptions,
    onGoToPage: goToPageHandler
  }

  let contentToReturn: JSX.Element = (
    <div className={classes.TasksTabWrapper}>
      <div className={classes.TasksTab}>
        <div className={classes.TitleAndSearchWrapper}>
          <ArchiveTasksTitleSearch />
        </div>
        <div className={classes.ListWrapper}>
          <ArchiveTasksList />
        </div>
        <div className={classes.PaginationContainer}>
          <div className={classes.PaginationWrapper}>
            <Pagination options={paginationOptionsToPass} />
          </div>
        </div>
      </div>
      {/*<div className={classes.TasksTab}>*/}
      {/*  <div className={classes.TitleAndSearchWrapper}>*/}
      {/*    <CurrentTasksTitleSearch />*/}
      {/*  </div>*/}
      {/*  <div className={classes.ActionButtonsContainer}>*/}
      {/*    <div className={classes.ActionButton}>*/}
      {/*      <CorporationsButton onClick={() => changeTasksTabHandler(CorporationsTasksTabsEnumEng.newTask)}*/}
      {/*                          title={'Новая задача'} imageUrl={newTaskImg} styles={buttonStyles}*/}
      {/*                          imageWidth={'17%'} titleTextStyles={newTaskButtonTitleTextStyles}/>*/}
      {/*    </div>*/}
      {/*    <div className={classes.ActionButton}>*/}
      {/*      <CorporationsButton onClick={() => changeTasksTabHandler(CorporationsTasksTabsEnumEng.newTask)}*/}
      {/*                          title={'Архив задач'} imageUrl={tasksArchiveImg} styles={buttonStyles}*/}
      {/*                          imageWidth={'17%'} titleTextStyles={archiveButtonTitleTextStyles}/>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className={classes.TasksListContainer}>*/}
      {/*    <div className={classes.TasksListWrapper}>*/}
      {/*      <CurrentTasksList />*/}
      {/*    </div>*/}
      {/*    <div className={classes.PaginationContainer}>*/}
      {/*      <div className={classes.PaginationWrapper}>*/}
      {/*        <Pagination options={paginationOptionsToPass} />*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  )

  // if(isLoading) {
  //   contentToReturn = (
  //     <div className={classes.TasksTabWrapper}>
  //       <div className={classes.TasksTab}>
  //         <div className={classes.TitleAndSearchWrapper}>
  //           <CurrentTasksTitleSearch />
  //         </div>
  //         <div className={classes.ActionButtonsContainer}>
  //           <div className={classes.ActionButton}>
  //             <CorporationsButton onClick={() => changeTasksTabHandler(CorporationsTasksTabsEnumEng.newTask)}
  //                                 title={'Новая задача'} imageUrl={newTaskImg} styles={buttonStyles}
  //                                 imageWidth={'17%'} titleTextStyles={newTaskButtonTitleTextStyles}/>
  //           </div>
  //           <div className={classes.ActionButton}>
  //             <CorporationsButton onClick={() => changeTasksTabHandler(CorporationsTasksTabsEnumEng.newTask)}
  //                                 title={'Архив задач'} imageUrl={tasksArchiveImg} styles={buttonStyles}
  //                                 imageWidth={'17%'} titleTextStyles={archiveButtonTitleTextStyles}/>
  //           </div>
  //         </div>
  //         <div className={classes.TasksListContainer}>
  //           <div className={classes.TasksListWrapper}>
  //             <LoadingIndicator />
  //           </div>
  //           <div className={classes.PaginationContainer}>
  //             <div className={classes.PaginationWrapper}>
  //               <Pagination options={paginationOptionsToPass} />
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }

  return contentToReturn;
});

export default ArchiveTasksTab;