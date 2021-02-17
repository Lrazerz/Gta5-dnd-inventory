import { PermissionsPropertyInitialStateInterface } from '../../../../../../../../models/hud/corporations/tabs/permissions/tabs/propertyInterfaces';
import { PermissionsPropertyTabsEnum } from '../../../../../../../../models/hud/corporations/tabs/permissions/tabs/propertyEnums';
import { PERMISSIONS_PROPERTY_OPEN_TAB } from '../../../../../../../actions/hud/corporations/tabs/permissions/tabs/property/propertyTypes';
import { CORPORATIONS_TAB_OPEN } from '../../../../../../../actions/hud/corporations/corporationsTypes';
import {
  PERMISSIONS_ROLE_REMOVE,
  PERMISSIONS_ROLE_SELECT,
  PERMISSIONS_TAB_OPEN,
} from '../../../../../../../actions/hud/corporations/tabs/permissions/permissionsTypes';

const initialState: PermissionsPropertyInitialStateInterface = {
  openedTab: PermissionsPropertyTabsEnum.office,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CORPORATIONS_TAB_OPEN:
    case PERMISSIONS_ROLE_SELECT:
    case PERMISSIONS_ROLE_REMOVE:
    case PERMISSIONS_TAB_OPEN: {
      return initialState;
    }
    case PERMISSIONS_PROPERTY_OPEN_TAB: {
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
