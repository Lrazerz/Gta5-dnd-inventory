import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { window_corporations_staff_openStaffTab } from '../../../../utils/windowFuncs/hud/Corporations/tabs/staff/staffWindowFuncs';
import { StaffTabInitialStateInterface } from '../../../../models/hud/corporations/tabs/staff/tabs/staffInterfaces';
import { staffOpenStaffTabAction } from '../../../../redux/actions/hud/corporations/tabs/staff/tabs/staff';
import { CorporationsStaffTabsEnumEng } from '../../../../models/hud/corporations/tabs/staff/staffEnums';
import StaffTabStaff from './StaffTab/StaffTab';
import StaffTabInvite from './InviteTab/StaffTabInvite';

const StaffTab: React.FC = React.memo(() => {
  const dispatch = useDispatch();

  const openedTab: CorporationsStaffTabsEnumEng = useSelector(
    (state) => state.hud.corporations.tabs.staff.staff.openedTab,
  );

  useEffect(() => {
    // @ts-ignore
    if (!window.corporations_staff_openPage) {
      // @ts-ignore
      window.corporations_staff_openPage = (jsonData: string) => {
        const parsedData: StaffTabInitialStateInterface = window_corporations_staff_openStaffTab(jsonData);
        dispatch(staffOpenStaffTabAction(parsedData));
      };
    }
  }, []);

  let contentToReturn: JSX.Element;

  switch (openedTab) {
    case CorporationsStaffTabsEnumEng.staff: {
      contentToReturn = <StaffTabStaff />;
      break;
    }
    case CorporationsStaffTabsEnumEng.invite: {
      contentToReturn = <StaffTabInvite />;
      break;
    }
    default: {
      contentToReturn = <div />;
    }
  }

  return contentToReturn;
});

export default StaffTab;
