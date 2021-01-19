import {CorporationsPermissionsTabsEnum} from "../../../../../../hud/models/corporations/enums";
import {
  PERMISSIONS_COMMON_PERMISSION_CHANGE,
  PERMISSIONS_PERMISSION_CHANGE,
  PERMISSIONS_PERMISSIONS_SET,
  PERMISSIONS_ROLE_REMOVE,
  PERMISSIONS_ROLE_SELECT,
  PERMISSIONS_ROLE_SET_INFO,
  PERMISSIONS_ROLES_PERMISSIONS_SET,
  PERMISSIONS_TAB_OPEN
} from "../../../../../actions/hud/corporations/tabs/permissions/permissionsTypes";
import {
  CommonPermissionsSetInterface,
  SingleRoleInterface
} from "../../../../../../hud/models/corporations/interfaces";

interface InitialStateInterface {
  openedTab: CorporationsPermissionsTabsEnum;
  roles: SingleRoleInterface[];
  selectedRole: SingleRoleInterface;
  commonPermissionsSets: CommonPermissionsSetInterface[];
}

const initialState: InitialStateInterface = {
  openedTab: CorporationsPermissionsTabsEnum.auto,
  roles: null,
  selectedRole: null,
  commonPermissionsSets: null
}

// const initialState: InitialStateInterface = {
//   openedTab: CorporationsPermissionsTabsEnum.auto,
//   roles: [
//     {id: '0', title: 'ЮЮЮЮЮЮЮЮЮЮЮ'},
//     {id: '1', title: 'ЮЮЮЮЮЮЮЮЮЮ'},
//     {id: '2', title: 'ЮЮЮЮЮЮЮЮЮЮЮ'},
//     {id: '3', title: 'DigitalNox Design4'},
//     {id: '4', title: 'DigitalNox Design5'},
//     {id: '5', title: 'DigitalNox Design6'},
//     {id: '6', title: 'DigitalNox Design7'},
//     {id: '7', title: 'DigitalNox Design8'},
//     {id: '8', title: 'DigitalNox Design9'},
//     {id: '9', title: 'DigitalNox Design10'},
//     {id: '10', title: 'DigitalNox Design11'},
//     {id: '11', title: 'DigitalNox Design12'},
//     {id: '12', title: 'DigitalNox Design13'},
//     {id: '13', title: 'DigitalNox Design14'},
//   ],
//   selectedRole: {id: '2', title: 'DigitalNox Design4'},
//   commonPermissionsSets: [
//     {
//       id: '0',
//       title: 'ЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮ', //15
//       permissions: [
//         {
//           id: '0',
//           title: 'ЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮ', //15
//           value: false
//         },
//         {
//           id: '1',
//           title: 'Возможность изменять разрешения ролей',
//           value: true
//         },
//         {
//           id: '2',
//           title: 'Возможность изменять оплату ролей',
//           value: false
//         }
//       ]
//     },
//     {
//       id: '1',
//       title: 'Персонал',
//       permissions: [
//         {
//           id: '0',
//           title: 'Доступ в меню персонала',
//           value: true
//         },
//         {
//           id: '1',
//           title: 'Возможность приглашать игроков',
//           value: true
//         },
//         {
//           id: '2',
//           title: 'Возможность кикать игроков',
//           value: false
//         }
//       ]
//     },
//     {
//       id: '3',
//       title: 'Казна',
//       permissions: [
//         {
//           id: '0',
//           title: 'Доступ в меню казны',
//           value: false
//         }
//       ]
//     },
//     {
//       id: '4',
//       title: 'asd',
//       permissions: [
//         {
//           id: '0',
//           title: 'Доступ в меню казны',
//           value: false
//         }
//       ]
//     },
//   ]
// }

export default (state = initialState, action) => {
  switch (action.type) {
    case PERMISSIONS_ROLES_PERMISSIONS_SET: {
      const selectedRole = action.roles.find(el => el.id === action.selectedRoleId);
      return {
        ...state,
        roles: action.roles,
        selectedRole: selectedRole,
        commonPermissionsSets: action.permissions
      }
    }
    case PERMISSIONS_ROLE_SELECT: {
      const selectedRoleIdx = state.roles.findIndex(role => role.id === action.id);
      return {
        ...initialState,
        roles: state.roles,
        selectedRole: {...state.roles[selectedRoleIdx]}
      }
    }
    case PERMISSIONS_ROLE_REMOVE: {
      const oldRoles = [...state.roles];
      const selectedRoleId = oldRoles.findIndex(role => role.id === action.id);
      oldRoles.splice(selectedRoleId, 1);
      return {
        ...initialState,
        roles: oldRoles
      }
    }
    case PERMISSIONS_COMMON_PERMISSION_CHANGE: {
      const prevCommonPermissions = [...state.commonPermissionsSets];
      const permSetIdx = prevCommonPermissions.findIndex(set => set.title === action.setTitle);
      const permIdx = prevCommonPermissions[permSetIdx].permissions.findIndex(perm => perm.title === action.title);
      prevCommonPermissions[permSetIdx].permissions[permIdx] = action.value;
      return {
        ...state,
        commonPermissionsSets: prevCommonPermissions
      }
    }
    case PERMISSIONS_TAB_OPEN: {
      return {
        ...state,
        openedTab: action.openedTab
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
    case PERMISSIONS_PERMISSION_CHANGE: {

      const newCommonPermissionsSets = [...state.commonPermissionsSets];
      const selectedPermissionsSetIdx = newCommonPermissionsSets.findIndex(set => set.id === action.setId);
      const selectedPermissionIdx =
        newCommonPermissionsSets[selectedPermissionsSetIdx].permissions
          .findIndex(permission => permission.id === action.permissionId);

      newCommonPermissionsSets[selectedPermissionsSetIdx].permissions[selectedPermissionIdx].value = action.value;

      return {
        ...state,
        commonPermissionsSets: newCommonPermissionsSets
      }
    }
    case PERMISSIONS_PERMISSIONS_SET: {
      return {
        ...state,
        commonPermissionsSets: action.permissionsSets
      }
    }
    default: {
      return state;
    }
  }
}

