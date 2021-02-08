import React, {useEffect} from 'react';
import {usePagination} from 'react-pagination-hook';
import {useDispatch, useSelector} from 'react-redux';
import classes from '../../../../styles/hud/components/Corporations/LogsTab/LogsTab.module.scss';
import LogsTitleSearch from "./LogsTitleSearch";
import {LogsInitialStateInterface, SingleLogInterface} from "../../../models/corporations/tabs/logs/logsInterfaces";
import LoadingIndicator from "../../common/LoadingIndicator/LoadingIndicator";
import SingleLog from "./SingleLog";
import Pagination from "../../common/Pagination/Pagination";
import {
  corporationsLogsOpenPageAction,
  corporationsLogsOpenPageOnlyAction
} from "../../../../redux/actions/hud/corporations/tabs/logs/logs";
import {corporations_logs_openPage} from "../../../../utils/windowFuncs/hud/Corporations/tabs/logs/logsInterceptors";

interface Props {
}

const LogsTab: React.FC<Props> = React.memo(() => {

  const dispatch = useDispatch();

  const logs: SingleLogInterface[] = useSelector(state => state.hud.corporations.tabs.logs.logs);
  const currentPage: number = useSelector(state => state.hud.corporations.tabs.logs.currentPage);
  const pagesCount: number = useSelector(state => state.hud.corporations.tabs.logs.pagesCount);

  useEffect(() => {
    // @ts-ignore
    if(!window.corporations_logs_openPage) {
      // @ts-ignore
      window.corporations_logs_openPage = (jsonData: string) => {
        const parsedData: LogsInitialStateInterface = corporations_logs_openPage(jsonData);
        dispatch(corporationsLogsOpenPageAction(parsedData));
      }
    }
    return () => {
      // @ts-ignore
      window.corporations_logs_openPage = null;
    }
  }, [])

  const paginationOptions = usePagination({
    initialPage: currentPage,
    numberOfPages: pagesCount,
    maxButtons: 3,
  });
  console.log('pagination', paginationOptions);

  const handleGoToPage = (pageNumber) => {
    if(paginationOptions.activePage === pageNumber || !logs) {
      return;
    }
    paginationOptions.goToPage(pageNumber);
    dispatch(corporationsLogsOpenPageOnlyAction(pageNumber, logs[logs.length - 1]));
    // todo mp trigger
  }

  const logsBlock: JSX.Element[] = logs && logs.map((log, i) => {
    return (
      <div key={i} className={classes.SingleLogWrapper}>
        <SingleLog log={log}/>
      </div>
    )
  })

  const paginationOptionsToPass = {
    ...paginationOptions,
    onGoToPage: handleGoToPage
  }

  let contentToReturn: JSX.Element = (
    <div className={classes.LogsTabWrapper}>
      <div className={classes.LogsTab}>
        <div className={classes.TitleAndSearchWrapper}>
          <LogsTitleSearch isLoading={false}/>
        </div>
        <div className={classes.LogsWrapper}>
          {logsBlock}
        </div>
        <div className={classes.PaginationContainer}>
          <div className={classes.PaginationWrapper}>
            <Pagination options={paginationOptionsToPass} />
          </div>
        </div>
      </div>
    </div>
  );


  if(!logs) {
    contentToReturn = (
      <div className={classes.LogsTabWrapper}>
        <div className={classes.LogsTab}>
          <div className={classes.TitleAndSearchWrapper}>
            <LogsTitleSearch isLoading={true}/>
          </div>
          <div className={classes.LoadingWrapper}>
            <LoadingIndicator/>
          </div>
          <div className={classes.PaginationContainer}>
            <div className={classes.PaginationWrapper}>
              <Pagination options={paginationOptionsToPass} />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return contentToReturn
});

export default LogsTab;