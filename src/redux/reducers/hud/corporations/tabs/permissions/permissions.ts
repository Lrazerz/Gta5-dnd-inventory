import {CorporationsPermissionsTabsEnum} from "../../../../../../hud/models/corporations/enums";
import {
  PERMISSIONS_PERMISSION_CHANGE,
  PERMISSIONS_PERMISSIONS_SET,
  PERMISSIONS_ROLE_REMOVE,
  PERMISSIONS_ROLE_SELECT,
  PERMISSIONS_ROLE_SET_INFO,
  PERMISSIONS_ROLES_PERMISSIONS_SET,
  PERMISSIONS_TAB_OPEN
} from "../../../../../actions/hud/corporations/tabs/permissions/permissionsTypes";
import {
  CommonPermissionsSetInterface, PermissionsReducerInterface,
  SingleRoleInterface
} from "../../../../../../hud/models/corporations/interfaces";
import {CORPORATIONS_TAB_OPEN} from "../../../../../actions/hud/corporations/corporationsTypes";

const initialState: PermissionsReducerInterface = {
  openedTab: CorporationsPermissionsTabsEnum.auto,
  roles: null,
  selectedRole: null,
  commonPermissionsSets: null
}

// const initialState: InitialStateInterface = {
//   openedTab: CorporationsPermissionsTabsEnum.auto,
//   roles: [
//     {title: 'ЮЮЮЮЮЮЮЮЮЮЮ'},
//     {title: 'ЮЮЮЮЮЮЮЮЮЮ'},
//     {title: 'ЮЮЮЮЮЮЮЮ'},
//     {title: 'DigitalNox Design4'},
//     {title: 'DigitalNox Design5'},
//     {title: 'DigitalNox Design6'},
//     {title: 'DigitalNox Design7'},
//     {title: 'DigitalNox Design8'},
//     {title: 'DigitalNox Design9'},
//     {title: 'DigitalNox Design10'},
//     {title: 'DigitalNox Design11'},
//     {title: 'DigitalNox Design12'},
//     {title: 'DigitalNox Design13'},
//     {title: 'DigitalNox Design14'},
//   ],
//   selectedRole: {title: 'DigitalNox Design4'},
//   commonPermissionsSets: [
//     {
//       title: 'ЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮ', //15
//       permissions: [
//         {
//           title: 'ЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮ', //15
//           value: false
//         },
//         {
//           title: 'Возможность изменять разрешения ролей',
//           value: true
//         },
//         {
//           title: 'Возможность изменять оплату ролей',
//           value: false
//         }
//       ]
//     },
//     {
//       title: 'Персонал',
//       permissions: [
//         {
//           title: 'Доступ в меню персонала',
//           value: true
//         },
//         {
//           title: 'Возможность приглашать игроков',
//           value: true
//         },
//         {
//           title: 'Возможность кикать игроков',
//           value: false
//         }
//       ]
//     },
//     {
//       title: 'Казна',
//       permissions: [
//         {
//           title: 'Доступ в меню казны',
//           value: false
//         }
//       ]
//     },
//     {
//       title: 'asd',
//       permissions: [
//         {
//           title: 'Доступ в меню казны',
//           value: false
//         }
//       ]
//     },
//   ]
// }

export default (state = initialState, action) => {
  switch (action.type) {
    case CORPORATIONS_TAB_OPEN: {
      return initialState;
    }
    case PERMISSIONS_TAB_OPEN: {
      return {
        ...state,
        openedTab: action.openedTab
      }
    }
    case PERMISSIONS_ROLES_PERMISSIONS_SET: {
      const selectedRole = action.roles.find(el => el.title === action.selectedRoleTitle);
      return {
        ...state,
        roles: action.roles,
        selectedRole: selectedRole,
        commonPermissionsSets: action.permissions
      }
    }
    case PERMISSIONS_ROLE_SELECT: {
      const selectedRoleIdx = state.roles.findIndex(role => role.title === action.title);
      return {
        ...initialState,
        roles: state.roles,
        selectedRole: {...state.roles[selectedRoleIdx]}
      }
    }
    case PERMISSIONS_ROLE_REMOVE: {
      const oldRoles = [...state.roles];
      const selectedRoleId = oldRoles.findIndex(role => role.title === action.title);
      oldRoles.splice(selectedRoleId, 1);
      return {
        ...initialState,
        roles: oldRoles
      }
    }
    // will be modules too or any other standard tab
    case PERMISSIONS_ROLE_SET_INFO: {
      console.log('action permissionsSets', action.permissionsSets);
      return {
        ...state,
        commonPermissionsSets: action.permissionsSets
      }
    }
    case PERMISSIONS_PERMISSIONS_SET: {
      return {
        ...state,
        commonPermissionsSets: action.permissionsSets
      }
    }
    case PERMISSIONS_PERMISSION_CHANGE: {
      const newCommonPermissionsSets = [...state.commonPermissionsSets];
      const selectedPermissionsSetIdx = newCommonPermissionsSets.findIndex(set => set.title === action.setTitle);
      const selectedPermissionIdx =
        newCommonPermissionsSets[selectedPermissionsSetIdx].permissions
          .findIndex(permission => permission.title === action.permissionTitle);

      newCommonPermissionsSets[selectedPermissionsSetIdx].permissions[selectedPermissionIdx].value = action.value;

      return {
        ...state,
        commonPermissionsSets: newCommonPermissionsSets
      }
    }
    default: {
      return state;
    }
  }
}

