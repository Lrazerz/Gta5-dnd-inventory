import { CORPORATIONS_STAFF_OPEN_TAB } from './staffTypes';
import { CorporationsStaffTabsEnumEng } from '../../../../../../models/hud/corporations/tabs/staff/staffEnums';

const corporationsStaffOpenTabAction = (tab: CorporationsStaffTabsEnumEng) => {
  return { type: CORPORATIONS_STAFF_OPEN_TAB, tab };
};

export { corporationsStaffOpenTabAction };
