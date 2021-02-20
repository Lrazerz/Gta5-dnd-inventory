import React, { useState } from 'react';
import classes from '../../../../../styles/hud/components/Corporations/StaffTab/StaffTab/StaffTabStateless.module.scss';
import { SingleStaffWorkerInterface } from '../../../../../models/hud/corporations/tabs/staff/tabs/staffInterfaces';
import StaffTabHeader from './StaffTabHeader';
import Pagination from '../../../common/Pagination/Pagination';
import StaffTabList from './StaffTabList';
import LoadingIndicator from '../../../common/LoadingIndicator/LoadingIndicator';

interface Props {
  staff: SingleStaffWorkerInterface[];
  currentPage: number;
  pagesCount: number;
  // must includes onGoToPage
  paginationOptions: any;
  isLoading: boolean;
}

const StaffTabStateless: React.FC<Props> = React.memo((props) => {
  let contentToReturn = (
    <div className={classes.StaffTabWrapper}>
      <div className={classes.StaffTab}>
        <div className={classes.HeaderWrapper}>
          <StaffTabHeader />
        </div>
        <div className={classes.ListWrapper}>
          <StaffTabList staff={props.staff} />
        </div>
        <div className={classes.PaginationContainer}>
          <div className={classes.PaginationWrapper}>
            <Pagination options={props.paginationOptions} />
          </div>
        </div>
      </div>
    </div>
  );

  if (props.isLoading) {
    contentToReturn = (
      <div className={classes.StaffTabWrapper}>
        <div className={classes.StaffTab}>
          <div className={classes.HeaderWrapper}>
            <StaffTabHeader />
          </div>
          <div className={classes.ListWrapper}>
            <LoadingIndicator />
          </div>
          <div className={classes.PaginationContainer}>
            <div className={classes.PaginationWrapper}>
              <Pagination options={props.paginationOptions} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return contentToReturn;
});

export default StaffTabStateless;
