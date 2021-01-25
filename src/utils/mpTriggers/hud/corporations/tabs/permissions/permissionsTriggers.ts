
// tab permissions
import {CorporationsPermissionsTabsDict, CorporationsTabsDict} from "../../../../../../hud/models/corporations/enums";

const mpTrigger_corporations_permissions_selectRole = (roleTitle: string) => {
  console.log('mpTrigger_corporations_permissions_selectRole', CorporationsTabsDict.permissions, roleTitle);
  try {
    const data = JSON.stringify({
      OpenedTab: CorporationsTabsDict.permissions,
      RoleTitle: roleTitle
    })
    // @ts-ignore
    mp.trigger('cef_cl_corporations_permissions_selectRole', data);
  } catch (e) {}
}

const mpTrigger_corporations_permissions_removeRole = (roleTitle: string) => {
  console.log('remove cef_cl_corporations_permissions_removeRole', CorporationsTabsDict.permissions, roleTitle);
  try {
    const data = JSON.stringify({
      OpenedTab: CorporationsTabsDict.permissions,
      RoleTitle: roleTitle
    })
    // @ts-ignore
    mp.trigger('cef_cl_corporations_permissions_removeRole', data);
  } catch (e) {}
}

const mpTrigger_corporations_permissions_changePermission =
  (openedRoleTitle: string, setTitle: string, permissionTitle: string, value: boolean) => {
    console.log('mpTrigger_corporations_permissions_changePermission',
      CorporationsTabsDict.permissions, openedRoleTitle, setTitle, permissionTitle, value)
    try {
      const data = JSON.stringify({
        OpenedTab: CorporationsTabsDict.permissions,
        OpenedRole: openedRoleTitle,
        SetTitle: setTitle,
        PermissionTitle: permissionTitle,
        Value: value
      })
      // @ts-ignore
      mp.trigger('cef_cl_corporations_permissions_changePermission', data);
    } catch (e) {}
  }

const mpTrigger_corporations_permissions_openTab = (openedRoleTitle: string, tabTitle: string) => {
  console.log('cef_cl_corporations_permissions_openTab', 'openedRole', openedRoleTitle, 'openedTab', tabTitle);
  try {
    const data = JSON.stringify({
      OpenedTab: CorporationsTabsDict.permissions,
      OpenedRole: openedRoleTitle,
      OpenedPermissionsTab: tabTitle
    })
    // @ts-ignore
    mp.trigger('cef_cl_corporations_permissions_openTab', data);
  } catch (e) {}
}

//region auto sub tab ("Техника")
const mpTrigger_corporations_permissions_auto_selectModel = (openedRoleTitle: string, modelTitle: string) => {
  console.log(`cef_cl_corporations_permissions_auto_selectModel. Role: ${openedRoleTitle}. 
  openedTab: ${CorporationsTabsDict.permissions}. openedPermissionsTab: ${CorporationsPermissionsTabsDict.auto}. 
  model: ${modelTitle}`);
  try {
    const data = JSON.stringify({
      OpenedRole: openedRoleTitle,
      OpenedTab: CorporationsTabsDict.permissions,
      OpenedPermissionsTab: CorporationsPermissionsTabsDict.auto,
      Model: modelTitle
    })
    // @ts-ignore
    mp.trigger('cef_cl_corporations_permissions_auto_selectModel', data);
  } catch (e) {}
}

const mpTrigger_corporations_permissions_auto_changeOption = (openedRoleTitle: string, selectedModel: string, optionTitle: string,
                                                              optionValue: string | boolean) => {
  console.log('cef_cl_corporations_permissions_auto_changeOption', openedRoleTitle, CorporationsTabsDict.permissions,
    CorporationsPermissionsTabsDict.auto, selectedModel, optionTitle, optionValue)
  try {
    const data = JSON.stringify({
      OpenedRole: openedRoleTitle,
      OpenedTab: CorporationsTabsDict.permissions,
      OpenedPermissionsTab: CorporationsPermissionsTabsDict.auto,
      OpenedModel: selectedModel,
      OptionTitle: optionTitle,
      OptionValue: optionValue
    })
    // @ts-ignore
    mp.trigger('cef_cl_corporations_permissions_auto_changeOption', data);
  } catch (e) {}
}

const mpTrigger_corporations_permissions_auto_changePermission = (openedRoleTitle, selectedModel: string, permissionTitle: string,
                                                                  value: string | boolean) => {
  console.log('cef_cl_corporations_permissions_auto_changePermission', openedRoleTitle, CorporationsTabsDict.permissions,
    CorporationsPermissionsTabsDict.auto, selectedModel, permissionTitle, value);
  try {
    const data = JSON.stringify({
      OpenedRole: openedRoleTitle,
      OpenedTab: CorporationsTabsDict.permissions,
      OpenedPermissionsTab: CorporationsPermissionsTabsDict.auto,
      OpenedModel: selectedModel,
      Permission: permissionTitle,
      Value: value
    })
    // @ts-ignore
    mp.trigger('cef_cl_corporations_permissions_auto_changePermission', data);
  } catch (e) {}
}

export {
  mpTrigger_corporations_permissions_selectRole,
  mpTrigger_corporations_permissions_removeRole,
  mpTrigger_corporations_permissions_changePermission,
  mpTrigger_corporations_permissions_openTab,
  mpTrigger_corporations_permissions_auto_selectModel,
  mpTrigger_corporations_permissions_auto_changeOption,
  mpTrigger_corporations_permissions_auto_changePermission
}