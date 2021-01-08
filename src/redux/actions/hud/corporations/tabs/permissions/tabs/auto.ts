import {
  PERMISSIONS_AUTO_CHANGE_PERMISSION,
  PERMISSIONS_AUTO_SELECT_MODEL,
  PERMISSIONS_AUTO_SET_DATA,
  PERMISSIONS_AUTO_SET_RESPONSIBLE
} from "./autoTypes";
import {
  PermissionsTabAutoInterface
} from "../../../../../../../hud/models/corporations/interfaces";

const permissionsAutoSetDataAction = (data: PermissionsTabAutoInterface) => {
  return {type: PERMISSIONS_AUTO_SET_DATA, data}
}

const permissionsAutoSelectModelAction = (modelId) => {
  return {type: PERMISSIONS_AUTO_SELECT_MODEL, id: modelId}
}

const permissionsAutoChangeResponsibleAction = (responsibleId) => {
  return {type: PERMISSIONS_AUTO_SET_RESPONSIBLE, id: responsibleId}
}

const permissionsAutoChangePermission = (permissionId, value) => {
  return {type: PERMISSIONS_AUTO_CHANGE_PERMISSION, id: permissionId, value}
}


export {
  permissionsAutoSetDataAction,

  permissionsAutoSelectModelAction,
  permissionsAutoChangeResponsibleAction,
  permissionsAutoChangePermission
}