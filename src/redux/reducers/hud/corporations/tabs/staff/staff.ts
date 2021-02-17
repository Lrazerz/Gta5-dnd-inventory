import { CorporationsStaffInitialStateInterface } from '../../../../../../models/hud/corporations/tabs/staff/staffInterfaces';
import { CorporationsStaffTabsEnumEng } from '../../../../../../models/hud/corporations/tabs/staff/staffEnums';
import { CORPORATIONS_STAFF_OPEN_TAB } from '../../../../../actions/hud/corporations/tabs/staff/staffTypes';
import { CORPORATIONS_TAB_OPEN } from '../../../../../actions/hud/corporations/corporationsTypes';

const initialState: CorporationsStaffInitialStateInterface = {
  openedTab: CorporationsStaffTabsEnumEng.personal,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CORPORATIONS_TAB_OPEN: {
      return initialState;
    }
    case CORPORATIONS_STAFF_OPEN_TAB: {
      return {
        ...state,
        openedTab: action.tab,
      };
    }
    default: {
      return state;
    }
  }
};
