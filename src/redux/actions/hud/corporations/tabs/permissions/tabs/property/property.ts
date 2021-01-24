import {PermissionsPropertyTabsEnum} from "../../../../../../../../hud/models/corporations/tabs/permissions/tabs/propertyEnums";
import {PERMISSIONS_PROPERTY_OPEN_TAB} from "./propertyTypes";

const permissionsPropertyOpenTabAction = (tab: PermissionsPropertyTabsEnum) => {
  return {type: PERMISSIONS_PROPERTY_OPEN_TAB, tab}
}

export {
  permissionsPropertyOpenTabAction
}