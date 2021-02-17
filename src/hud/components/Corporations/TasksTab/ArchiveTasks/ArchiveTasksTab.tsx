import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from '../../../../../styles/hud/components/Corporations/TasksTab/ArchiveTasksTab/ArchiveTasksTab.module.scss';
import { window_corporations_tasks_archiveTasks_openPage } from '../../../../../utils/windowFuncs/hud/Corporations/tabs/tasks/tabs/archiveTasksInterceptors';
import {
  tasksArchiveTasksChangePageAction,
  tasksArchiveTasksOpenPageAction,
} from '../../../../../redux/actions/hud/corporations/tabs/tasks/tabs/archiveTasks';
import {
  TasksArchiveTasksInitialStateInterface,
  TasksDoneTaskInterface,
} from '../../../../../models/hud/corporations/tabs/tasks/tabs/archiveTasksInterfaces';
import { usePagination } from 'react-pagination-hook';
import Pagination from '../../../common/Pagination/Pagination';
import LoadingIndicator from '../../../common/LoadingIndicator/LoadingIndicator';
import ArchiveTasksTitleSearch from './ArchiveTasksTitleSearch';
import ArchiveTasksList from './ArchiveTasksList';

const ArchiveTasksTab: React.FC = React.memo(() => {
  const dispatch = useDispatch();

  const archiveTasks: TasksDoneTaskInterface[] = useSelector(
    (state) => state.hud.corporations.tabs.tasks.tabs.archive.tasks,
  );
  const currentPage: number = useSelector((state) => state.hud.corporations.tabs.tasks.tabs.archive.currentPage);
  const pagesCount: number = useSelector((state) => state.hud.corporations.tabs.tasks.tabs.archive.pagesCount);
  const isLoading: boolean = useSelector((state) => state.hud.corporations.tabs.tasks.tabs.archive.isLoading);

  useEffect(() => {
    // @ts-ignore
    if (!window.corporations_tasks_archiveTasks_openPage) {
      // @ts-ignore
      window.corporations_tasks_archiveTasks_openPage = (jsonData: string) => {
        const parsedData: TasksArchiveTasksInitialStateInterface = window_corporations_tasks_archiveTasks_openPage(
          jsonData,
        );
        dispatch(tasksArchiveTasksOpenPageAction(parsedData));
      };
    }
    return () => {
      // @ts-ignore
      window.corporations_tasks_archiveTasks_openPage = null;
    };
  }, []);

  const paginationOptions = usePagination({
    initialPage: currentPage,
    numberOfPages: pagesCount,
    maxButtons: 3,
  });

  const goToPageHandler = (pageNumber) => {
    if (paginationOptions.activePage === pageNumber || isLoading) {
      return;
    }
    paginationOptions.goToPage(pageNumber);
    dispatch(tasksArchiveTasksChangePageAction(pageNumber, archiveTasks[archiveTasks.length - 1]));
  };

  const paginationOptionsToPass = {
    ...paginationOptions,
    onGoToPage: goToPageHandler,
  };

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
    </div>
  );

  if (isLoading) {
    contentToReturn = (
      <div className={classes.TasksTabWrapper}>
        <div className={classes.TasksTab}>
          <div className={classes.TitleAndSearchWrapper}>
            <ArchiveTasksTitleSearch />
          </div>
          <div className={classes.ListWrapper}>{<LoadingIndicator />}</div>
          <div className={classes.PaginationContainer}>
            <div className={classes.PaginationWrapper}>
              <Pagination options={paginationOptionsToPass} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return contentToReturn;
});

export default ArchiveTasksTab;
