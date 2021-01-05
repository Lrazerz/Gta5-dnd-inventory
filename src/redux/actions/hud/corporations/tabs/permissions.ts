import {CorporationsPermissionsTabsEnum} from "../../../../../hud/models/corporations/enums";
import {
  PERMISSIONS_COMMON_PERMISSION_CHANGE, PERMISSIONS_ROLE_REMOVE,
  PERMISSIONS_ROLES_PERMISSIONS_SET,
  PERMISSIONS_TAB_OPEN
} from "./permissionsTypes";
import {CommonPermissionsSetInterface} from "../../../../../hud/models/corporations/interfaces";

// roles and common permissions
const permissionsSetRolesPermissions = (roles: string[], permissions: CommonPermissionsSetInterface[]) => {
  return {type: PERMISSIONS_ROLES_PERMISSIONS_SET, roles, permissions}
}

const permissionsSelectRoleAction = (selectedRole: string) => {
  return {type: PERMISSIONS_TAB_OPEN, selectedRole};
}

const permissionsRemoveRoleAction = (selectedRole: string) => {
  return {type: PERMISSIONS_ROLE_REMOVE, selectedRole};
}

const permissionsCommonPermChange = (permissionsSetTitle: string, permissionTitle: string, permissionValue: boolean) => {
  return {type: PERMISSIONS_COMMON_PERMISSION_CHANGE, setTitle: permissionsSetTitle,
    title: permissionTitle, value: permissionValue}
}

const permissionsOpenTabAction = (openedTab: CorporationsPermissionsTabsEnum) => {
  return {type: PERMISSIONS_TAB_OPEN, openedTab};
}

export {
  permissionsSetRolesPermissions,

  permissionsSelectRoleAction,
  permissionsRemoveRoleAction,

  permissionsCommonPermChange,

  permissionsOpenTabAction
}