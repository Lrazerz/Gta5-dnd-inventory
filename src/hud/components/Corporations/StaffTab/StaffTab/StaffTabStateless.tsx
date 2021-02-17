import React from 'react';
import classes from '../../../../../styles/hud/components/Corporations/StaffTab/StaffTab/StaffTabStateless.module.scss';
import { SingleStaffWorkerInterface } from '../../../../../models/hud/corporations/tabs/staff/tabs/staffInterfaces';

interface Props {
  staff: SingleStaffWorkerInterface[];
  currentPage: number;
  pagesCount: number;
}

const StaffTabStateless: React.FC<Props> = React.memo((props) => {
  return (
    <div className={classes.StaffTabStateless}>
      <div></div>
    </div>
  );
});

export default StaffTabStateless;
