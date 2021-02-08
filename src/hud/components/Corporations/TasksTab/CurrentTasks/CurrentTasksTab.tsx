import React, {CSSProperties, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import classes from '../../../../../styles/hud/components/Corporations/TasksTab/CurrentTasksTab/CurrentTasksTab.module.scss';
import CurrentTasksTitleSearch from "./CurrentTasksTitleSearch";
import CorporationsButton from "../../CorporationsButton";
import {CorporationsTasksTabsEnumEng} from "../../../../models/corporations/tabs/tasks/tasksEnums";
import {corporationsTasksOpenTabAction} from "../../../../../redux/actions/hud/corporations/tabs/tasks/tasks";
import newTaskImg from '../../../../../assets/hud/images/components/Corporations/tabs/tasks/newTask.svg';
import tasksArchiveImg from '../../../../../assets/hud/images/components/Corporations/tabs/tasks/tasksArchive.svg';
import Pagination from "../../../common/Pagination/Pagination";
import {usePagination} from "react-pagination-hook";
import {
  TasksCurrentTasksInitialStateInterface,
  TasksSingleTaskInterface
} from "../../../../models/corporations/tabs/tasks/tabs/currentTasksInterfaces";
import {
  tasksCurrentTasksChangePageAction,
  tasksCurrentTasksOpenPageAction
} from "../../../../../redux/actions/hud/corporations/tabs/tasks/tabs/currentTasks";
import {window_corporations_tasks_currentTasks_openPage} from "../../../../../utils/windowFuncs/hud/Corporations/tabs/tasks/tabs/currentTasksInterceptors";
import LoadingIndicator from "../../../common/LoadingIndicator/LoadingIndicator";
import CurrentTasksList from "./CurrentTasksList";

interface Props {
}

const CurrentTasksTab: React.FC<Props> = React.memo(() => {

  const dispatch = useDispatch();

  const currentTasks: TasksSingleTaskInterface[] =
    useSelector(state => state.hud.corporations.tabs.tasks.tabs.current.tasks);
  const currentPage: number = useSelector(state => state.hud.corporations.tabs.tasks.tabs.current.currentPage);
  const pagesCount: number = useSelector(state => state.hud.corporations.tabs.tasks.tabs.current.pagesCount);
  const isLoading: number = useSelector(state => state.hud.corporations.tabs.tasks.tabs.current.isLoading);

  useEffect(() => {
    // @ts-ignore
    if(!window.corporations_tasks_currentTasks_openPage) {
      // @ts-ignore
      window.corporations_tasks_currentTasks_openPage = (jsonData: string) => {
        const parsedData: TasksCurrentTasksInitialStateInterface = window_corporations_tasks_currentTasks_openPage(jsonData);
        dispatch(tasksCurrentTasksOpenPageAction(parsedData));
      }
    }
    return () => {
      // @ts-ignore
      window.corporations_tasks_currentTasks_openPage = null;
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
    dispatch(tasksCurrentTasksChangePageAction(pageNumber, currentTasks[currentTasks.length - 1]));
    // todo mp trigger
  }

  const changeTasksTabHandler = (tab: CorporationsTasksTabsEnumEng) => {
    dispatch(corporationsTasksOpenTabAction(tab));
  }

  const buttonStyles: CSSProperties = {
    padding: '0 13.76%'
  }

  const newTaskButtonTitleTextStyles: CSSProperties = {
    marginLeft: '5.14%'
  }

  const archiveButtonTitleTextStyles: CSSProperties = {
    marginLeft: '4.73%',
    opacity: '80%'
  }

  const paginationOptionsToPass = {
    ...paginationOptions,
    onGoToPage: goToPageHandler
  }

  let contentToReturn: JSX.Element = (
    <div className={classes.TasksTabWrapper}>
      <div className={classes.TasksTab}>
        <div className={classes.TitleAndSearchWrapper}>
          <CurrentTasksTitleSearch />
        </div>
        <div className={classes.ActionButtonsContainer}>
          <div className={classes.ActionButton}>
            <CorporationsButton onClick={() => changeTasksTabHandler(CorporationsTasksTabsEnumEng.newTask)}
                                title={'Новая задача'} imageUrl={newTaskImg} styles={buttonStyles}
                                imageWidth={'17%'} titleTextStyles={newTaskButtonTitleTextStyles}/>
          </div>
          <div className={classes.ActionButton}>
            <CorporationsButton onClick={() => changeTasksTabHandler(CorporationsTasksTabsEnumEng.archiveTasks)}
                                title={'Архив задач'} imageUrl={tasksArchiveImg} styles={buttonStyles}
                                imageWidth={'17%'} titleTextStyles={archiveButtonTitleTextStyles}/>
          </div>
        </div>
        <div className={classes.TasksListContainer}>
          <div className={classes.TasksListWrapper}>
            <CurrentTasksList />
          </div>
          <div className={classes.PaginationContainer}>
            <div className={classes.PaginationWrapper}>
              <Pagination options={paginationOptionsToPass} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  if(isLoading) {
    contentToReturn = (
      <div className={classes.TasksTabWrapper}>
        <div className={classes.TasksTab}>
          <div className={classes.TitleAndSearchWrapper}>
            <CurrentTasksTitleSearch />
          </div>
          <div className={classes.ActionButtonsContainer}>
            <div className={classes.ActionButton}>
              <CorporationsButton onClick={() => changeTasksTabHandler(CorporationsTasksTabsEnumEng.newTask)}
                                  title={'Новая задача'} imageUrl={newTaskImg} styles={buttonStyles}
                                  imageWidth={'17%'} titleTextStyles={newTaskButtonTitleTextStyles}/>
            </div>
            <div className={classes.ActionButton}>
              <CorporationsButton onClick={() => changeTasksTabHandler(CorporationsTasksTabsEnumEng.newTask)}
                                  title={'Архив задач'} imageUrl={tasksArchiveImg} styles={buttonStyles}
                                  imageWidth={'17%'} titleTextStyles={archiveButtonTitleTextStyles}/>
            </div>
          </div>
          <div className={classes.TasksListContainer}>
            <div className={classes.TasksListWrapper}>
              <LoadingIndicator />
            </div>
            <div className={classes.PaginationContainer}>
              <div className={classes.PaginationWrapper}>
                <Pagination options={paginationOptionsToPass} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return contentToReturn;
});

export default CurrentTasksTab;