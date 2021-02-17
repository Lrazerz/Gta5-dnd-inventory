import React from 'react';
import { useSelector } from 'react-redux';
import StaffTabStateless from './StaffTabStateless';
import { SingleStaffWorkerInterface } from '../../../../../models/hud/corporations/tabs/staff/tabs/staffInterfaces';

const StaffTab = (): JSX.Element => {
  const staff: SingleStaffWorkerInterface[] = useSelector(
    (state) => state.hud.corporations.tabs.staff.tabs.staff.staff,
  );

  const currentPage: number = useSelector((state) => state.hud.corporations.tabs.staff.tabs.staff.currentPage);
  const pagesCount: number = useSelector((state) => state.hud.corporations.tabs.staff.tabs.staff.pagesCount);

  return <StaffTabStateless staff={staff} currentPage={currentPage} pagesCount={pagesCount} />;
};

export default StaffTab;
