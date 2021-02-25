import { CORPORATIONS_STAFF_OPEN_TAB } from './staffTypes';
import { CorporationsStaffTabsEnumEng } from '../../../../../../models/hud/corporations/tabs/staff/staffEnums';
import { mpTrigger_corporations_staff_openTab } from '../../../../../../utils/mpTriggers/hud/corporations/tabs/staff/staffTriggers';

const corporationsStaffOpenTabAction = (tab: CorporationsStaffTabsEnumEng) => {
  return (dispatch) => {
    dispatch({ type: CORPORATIONS_STAFF_OPEN_TAB, tab });
    mpTrigger_corporations_staff_openTab(tab);
  };
};

export { corporationsStaffOpenTabAction };
