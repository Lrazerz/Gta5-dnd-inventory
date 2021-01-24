import {PermissionsPropertyTabsEnum} from "./propertyEnums";
import {PermissionsAutoModelOptionInterface} from "../../../interfaces";

interface PermissionsPropertyInitialStateInterface {
  openedTab: PermissionsPropertyTabsEnum
}

// office tab
interface PermissionsPropertyOfficeInitialStateInterface {
  // type,title,value
  options: PermissionsAutoModelOptionInterface[];
}

export {
  PermissionsPropertyInitialStateInterface,
  PermissionsPropertyOfficeInitialStateInterface
}