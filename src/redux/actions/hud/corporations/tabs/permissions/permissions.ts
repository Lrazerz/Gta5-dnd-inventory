import {CorporationsPermissionsTabsEnum} from "../../../../../../hud/models/corporations/enums";
import {
  PERMISSIONS_COMMON_PERMISSION_CHANGE, PERMISSIONS_PERMISSION_CHANGE,
  PERMISSIONS_PERMISSIONS_SET,
  PERMISSIONS_ROLE_REMOVE,
  PERMISSIONS_ROLE_SELECT,
  PERMISSIONS_ROLE_SET_INFO,
  PERMISSIONS_ROLES_PERMISSIONS_SET,
  PERMISSIONS_TAB_OPEN
} from "./permissionsTypes";
import {CommonPermissionsSetInterface, SingleRoleInterface} from "../../../../../../hud/models/corporations/interfaces";

// roles and common permissions
const permissionsSetRolesPermissions = (roles: SingleRoleInterface[], selectedRoleId: string, permissions: CommonPermissionsSetInterface[]) => {
  return {type: PERMISSIONS_ROLES_PERMISSIONS_SET, roles, selectedRoleId, permissions}
}

const permissionsSelectRoleAction = (selectedRoleId: string) => {
  return {type: PERMISSIONS_ROLE_SELECT, id: selectedRoleId};
}

// from server
const permissionsSetRoleInfoAction =
  (roleInfo: {commonPermissionsSets: CommonPermissionsSetInterface[]}) => {
  return {type: PERMISSIONS_ROLE_SET_INFO, permissionsSets: roleInfo.commonPermissionsSets}
}

const permissionsRemoveRoleAction = (selectedRole: string) => {
  return {type: PERMISSIONS_ROLE_REMOVE, selectedRole};
}

const permissionsCommonPermChangeAction = (permissionsSetTitle: string, permissionTitle: string, permissionValue: boolean) => {
  return {type: PERMISSIONS_COMMON_PERMISSION_CHANGE, setTitle: permissionsSetTitle,
    title: permissionTitle, value: permissionValue}
}

const permissionsOpenTabAction = (openedTab: CorporationsPermissionsTabsEnum) => {
  return {type: PERMISSIONS_TAB_OPEN, openedTab};
}

const permissionsChangePermission = (setId: string, permissionId: string, value: boolean) => {
  return {type: PERMISSIONS_PERMISSION_CHANGE, setId, permissionId, value}
}

const permissionsRefreshPermissions = (permissionsSets: CommonPermissionsSetInterface[]) => {
  return {type: PERMISSIONS_PERMISSIONS_SET, permissionsSets}
}

export {
  permissionsSetRolesPermissions,

  permissionsSelectRoleAction,
  permissionsSetRoleInfoAction,
  permissionsRemoveRoleAction,

  permissionsCommonPermChangeAction,

  permissionsOpenTabAction,

  permissionsChangePermission,

  permissionsRefreshPermissions
}