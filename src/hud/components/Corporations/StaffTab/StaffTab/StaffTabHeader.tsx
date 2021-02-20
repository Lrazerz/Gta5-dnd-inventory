import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import StaffTabHeaderStateless from './StaffTabHeaderStateless';
import { corporationsStaffOpenTabAction } from '../../../../../redux/actions/hud/corporations/tabs/staff/staff';
import { CorporationsStaffTabsEnumEng } from '../../../../../models/hud/corporations/tabs/staff/staffEnums';
import { staffSetFilterAction } from '../../../../../redux/actions/hud/corporations/tabs/staff/tabs/staff';

const StaffTabHeader: React.FC = React.memo(() => {
  const [searchText, setSearchText] = useState('');

  const dispatch = useDispatch();

  const changeSearchTextHandler = (newText: string) => {
    setSearchText(newText);
  };

  const sendSearchFilter = () => {
    staffSetFilterAction(searchText);
  };

  const searchKeyDownHandler = (e) => {
    if (e.key.toLowerCase() === 'enter') {
      sendSearchFilter();
    }
  };

  const searchBlurHandler = () => {
    sendSearchFilter();
  };

  const inviteTabHandler = () => {
    dispatch(corporationsStaffOpenTabAction(CorporationsStaffTabsEnumEng.invite));
  };

  return (
    <StaffTabHeaderStateless
      onInviteTabOpen={inviteTabHandler}
      searchText={searchText}
      onSearchTextChange={changeSearchTextHandler}
      onSearchKeyDown={searchKeyDownHandler}
      onSearchBlur={searchBlurHandler}
    />
  );
});

export default StaffTabHeader;
