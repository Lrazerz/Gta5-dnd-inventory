import {CorporationsPermissionsTabsEnum} from "../../../../../../hud/models/corporations/enums";
import {
  PERMISSIONS_PERMISSION_CHANGE,
  PERMISSIONS_PERMISSIONS_SET,
  PERMISSIONS_ROLE_REMOVE,
  PERMISSIONS_ROLE_SELECT,
  PERMISSIONS_ROLE_SET_INFO,
  PERMISSIONS_ROLES_PERMISSIONS_SET,
  PERMISSIONS_TAB_OPEN
} from "./permissionsTypes";
import {CommonPermissionsSetInterface, SingleRoleInterface} from "../../../../../../hud/models/corporations/interfaces";

// roles and common permissions
const permissionsSetRolesPermissions = (roles: SingleRoleInterface[], selectedRoleTitle: string, permissions: CommonPermissionsSetInterface[]) => {
  return {type: PERMISSIONS_ROLES_PERMISSIONS_SET, roles, selectedRoleTitle, permissions}
}

const permissionsSelectRoleAction = (selectedRoleTitle: string) => {
  return {type: PERMISSIONS_ROLE_SELECT, title: selectedRoleTitle};
}

// from server
const permissionsSetRoleInfoAction =
  (roleInfo: {commonPermissionsSets: CommonPermissionsSetInterface[]}) => {
  return {type: PERMISSIONS_ROLE_SET_INFO, permissionsSets: roleInfo.commonPermissionsSets};
}

const permissionsRemoveRoleAction = (roleTitle: string) => {
  return {type: PERMISSIONS_ROLE_REMOVE, title: roleTitle};
}

const permissionsOpenTabAction = (openedTab: CorporationsPermissionsTabsEnum) => {
  return {type: PERMISSIONS_TAB_OPEN, openedTab};
}

const permissionsChangePermission = (setTitle: string, permissionTitle: string, value: boolean) => {
  return {type: PERMISSIONS_PERMISSION_CHANGE, setTitle, permissionTitle, value}
}

const permissionsRefreshPermissions = (permissionsSets: CommonPermissionsSetInterface[]) => {
  return {type: PERMISSIONS_PERMISSIONS_SET, permissionsSets}
}

export {
  permissionsSetRolesPermissions,

  permissionsSelectRoleAction,
  permissionsSetRoleInfoAction,
  permissionsRemoveRoleAction,

  permissionsOpenTabAction,

  permissionsChangePermission,

  permissionsRefreshPermissions
}