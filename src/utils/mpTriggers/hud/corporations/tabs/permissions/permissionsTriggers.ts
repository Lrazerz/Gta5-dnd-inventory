// tab permissions
import { CorporationsPermissionsTabsDict, CorporationsTabsDict } from '../../../../../../models/hud/corporations/enums';
import { SingleRoleInterface } from '../../../../../../models/hud/corporations/interfaces';

const mpTrigger_corporations_permissions_selectRole = (roleTitle: string) => {
  console.log('mpTrigger_corporations_permissions_selectRole', CorporationsTabsDict.permissions, roleTitle);
  try {
    const data = JSON.stringify({
      OpenedTab: CorporationsTabsDict.permissions,
      RoleTitle: roleTitle,
    });
    mp.trigger('cef_cl_corporations_permissions_selectRole', data);
  } catch (e) {}
};

const mpTrigger_corporations_permissions_removeRole = (roleTitle: string) => {
  console.log('remove cef_cl_corporations_permissions_removeRole', CorporationsTabsDict.permissions, roleTitle);
  try {
    const data = JSON.stringify({
      OpenedTab: CorporationsTabsDict.permissions,
      RoleTitle: roleTitle,
    });
    mp.trigger('cef_cl_corporations_permissions_removeRole', data);
  } catch (e) {}
};

const mpTrigger_corporations_permissions_changePermission = (
  openedRole: SingleRoleInterface,
  setTitle: string,
  permissionTitle: string,
  value: boolean,
) => {
  console.log(
    'mpTrigger_corporations_permissions_changePermission',
    CorporationsTabsDict.permissions,
    openedRole,
    setTitle,
    permissionTitle,
    value,
  );
  try {
    const data = JSON.stringify({
      OpenedTab: CorporationsTabsDict.permissions,
      OpenedRole: {
        Title: openedRole.title,
        Priority: openedRole.priority,
      },
      SetTitle: setTitle,
      PermissionTitle: permissionTitle,
      Value: value,
    });

    mp.trigger('cef_cl_corporations_permissions_changePermission', data);
  } catch (e) {}
};

const mpTrigger_corporations_permissions_openTab = (openedRole: SingleRoleInterface, tabTitle: string) => {
  console.log('cef_cl_corporations_permissions_openTab', 'openedRole', openedRole, 'openedTab', tabTitle);
  try {
    const data = JSON.stringify({
      OpenedTab: CorporationsTabsDict.permissions,
      OpenedRole: {
        Title: openedRole.title,
        Priority: openedRole.priority,
      },
      OpenedPermissionsTab: tabTitle,
    });

    mp.trigger('cef_cl_corporations_permissions_openTab', data);
  } catch (e) {}
};

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
      Model: modelTitle,
    });

    mp.trigger('cef_cl_corporations_permissions_auto_selectModel', data);
  } catch (e) {}
};

const mpTrigger_corporations_permissions_auto_changeOption = (
  openedRoleTitle: string,
  selectedModel: string,
  optionTitle: string,
  optionValue: string | boolean,
) => {
  console.log(
    'cef_cl_corporations_permissions_auto_changeOption',
    openedRoleTitle,
    CorporationsTabsDict.permissions,
    CorporationsPermissionsTabsDict.auto,
    selectedModel,
    optionTitle,
    optionValue,
  );
  try {
    const data = JSON.stringify({
      OpenedRole: openedRoleTitle,
      OpenedTab: CorporationsTabsDict.permissions,
      OpenedPermissionsTab: CorporationsPermissionsTabsDict.auto,
      OpenedModel: selectedModel,
      OptionTitle: optionTitle,
      OptionValue: optionValue,
    });
    mp.trigger('cef_cl_corporations_permissions_auto_changeOption', data);
  } catch (e) {}
};

const mpTrigger_corporations_permissions_auto_changePermission = (
  openedRoleTitle,
  selectedModel: string,
  permissionTitle: string,
  value: string | boolean,
) => {
  console.log(
    'cef_cl_corporations_permissions_auto_changePermission',
    openedRoleTitle,
    CorporationsTabsDict.permissions,
    CorporationsPermissionsTabsDict.auto,
    selectedModel,
    permissionTitle,
    value,
  );
  try {
    const data = JSON.stringify({
      OpenedRole: openedRoleTitle,
      OpenedTab: CorporationsTabsDict.permissions,
      OpenedPermissionsTab: CorporationsPermissionsTabsDict.auto,
      OpenedModel: selectedModel,
      Permission: permissionTitle,
      Value: value,
    });

    mp.trigger('cef_cl_corporations_permissions_auto_changePermission', data);
  } catch (e) {}
};

export {
  mpTrigger_corporations_permissions_selectRole,
  mpTrigger_corporations_permissions_removeRole,
  mpTrigger_corporations_permissions_changePermission,
  mpTrigger_corporations_permissions_openTab,
  mpTrigger_corporations_permissions_auto_selectModel,
  mpTrigger_corporations_permissions_auto_changeOption,
  mpTrigger_corporations_permissions_auto_changePermission,
};
