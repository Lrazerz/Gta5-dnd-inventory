import React from 'react';
import classes from '../../../../../styles/hud/components/Corporations/StaffTab/StaffTab/StaffTabList.module.scss';
import { SingleStaffWorkerInterface } from '../../../../../models/hud/corporations/tabs/staff/tabs/staffInterfaces';
import StaffTabListItem from './StaffTabListItem';

interface Props {
  staff: SingleStaffWorkerInterface[];
}

const StaffTabList: React.FC<Props> = (props) => {
  const contentBlock: JSX.Element[] = props.staff.map((staffWorker) => {
    return (
      <div key={staffWorker.nickname} className={classes.SingleWorkerWrapper}>
        <StaffTabListItem staffWorker={staffWorker} />
      </div>
    );
  });

  return <div className={classes.StaffTabList}>{contentBlock}</div>;
};

export default StaffTabList;
