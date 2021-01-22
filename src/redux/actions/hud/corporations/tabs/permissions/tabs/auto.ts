import {
  PERMISSIONS_AUTO_CHANGE_OPTION,
  PERMISSIONS_AUTO_CHANGE_PERMISSION,
  PERMISSIONS_AUTO_SELECT_MODEL,
  PERMISSIONS_AUTO_SET_DATA
} from "./autoTypes";
import {
  PermissionsTabAutoInterface
} from "../../../../../../../hud/models/corporations/interfaces";

const permissionsAutoSetDataAction = (data: PermissionsTabAutoInterface) => {
  return {type: PERMISSIONS_AUTO_SET_DATA, data}
}

const permissionsAutoSelectModelAction = (modelTitle) => {
  return {type: PERMISSIONS_AUTO_SELECT_MODEL, title: modelTitle}
}

const permissionsAutoChangeOption = (optionTitle: string, optionValue: string | boolean) => {
  return {type: PERMISSIONS_AUTO_CHANGE_OPTION, title: optionTitle, value: optionValue};
}

const permissionsAutoChangePermission = (permissionTitle, value) => {
  return {type: PERMISSIONS_AUTO_CHANGE_PERMISSION, title: permissionTitle, value}
}

export {
  permissionsAutoSetDataAction,

  permissionsAutoSelectModelAction,

  permissionsAutoChangeOption,
  permissionsAutoChangePermission
}