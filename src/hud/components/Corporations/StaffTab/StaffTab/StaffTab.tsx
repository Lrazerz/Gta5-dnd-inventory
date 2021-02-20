import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StaffTabStateless from './StaffTabStateless';
import { SingleStaffWorkerInterface } from '../../../../../models/hud/corporations/tabs/staff/tabs/staffInterfaces';
import { usePagination } from 'react-pagination-hook';
import { staffChangePageAction } from '../../../../../redux/actions/hud/corporations/tabs/staff/tabs/staff';

const StaffTab = (): JSX.Element => {
  const dispatch = useDispatch();

  const isLoading: boolean = useSelector((state) => state.hud.corporations.tabs.staff.tabs.staff.isLoading);

  const staff: SingleStaffWorkerInterface[] = useSelector(
    (state) => state.hud.corporations.tabs.staff.tabs.staff.staff,
  );
  const currentPage: number = useSelector((state) => state.hud.corporations.tabs.staff.tabs.staff.currentPage);
  const pagesCount: number = useSelector((state) => state.hud.corporations.tabs.staff.tabs.staff.pagesCount);

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
    dispatch(staffChangePageAction(pageNumber, staff[staff.length - 1]));
  };

  const paginationOptionsToPass = {
    ...paginationOptions,
    onGoToPage: goToPageHandler,
  };

  return (
    <StaffTabStateless
      staff={staff}
      currentPage={currentPage}
      pagesCount={pagesCount}
      paginationOptions={paginationOptionsToPass}
      isLoading={isLoading}
    />
  );
};

export default StaffTab;
