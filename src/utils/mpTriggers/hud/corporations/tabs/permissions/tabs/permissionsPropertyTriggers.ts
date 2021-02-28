import {
  CorporationsPermissionsTabsDict,
  CorporationsTabsDict,
} from '../../../../../../../models/hud/corporations/enums';
import { PermissionsPropertyTabsDict } from '../../../../../../../models/hud/corporations/tabs/permissions/tabs/propertyEnums';
import { SingleRoleInterface } from '../../../../../../../models/hud/corporations/interfaces';

const mpTrigger_corporations_permissions_property_openTab = (openedRole: SingleRoleInterface, tabTitle: string) => {
  console.log(`OpenedRole: ${openedRole}. OpenedTab: ${CorporationsTabsDict.permissions}. 
  OpenedPermTab: ${CorporationsPermissionsTabsDict.property}. OpenPropertyTab: ${tabTitle}`);
  try {
    const data = JSON.stringify({
      OpenedRole: {
        Title: openedRole.title,
        Priority: openedRole.priority,
      },
      OpenedTab: CorporationsTabsDict.permissions,
      OpenedPermissionsTab: CorporationsPermissionsTabsDict.property,
      OpenedPropertyTab: tabTitle,
    });
    mp.trigger('cef_cl_permissions_property_openTab', data);
  } catch (e) {}
};

// office tab
const mpTrigger_permissions_property_office_changeOption = (
  openedRoleTitle: string,
  optionTitle: string,
  optionValue: string | boolean,
) => {
  console.log(
    'cef_cl_corporations_permissions_auto_changeOption',
    openedRoleTitle,
    CorporationsTabsDict.permissions,
    CorporationsPermissionsTabsDict.property,
    PermissionsPropertyTabsDict.office,
    optionTitle,
    optionValue,
  );
  try {
    const data = JSON.stringify({
      OpenedRole: openedRoleTitle,
      OpenedTab: CorporationsTabsDict.permissions,
      OpenedPermissionsTab: CorporationsPermissionsTabsDict.property,
      OpenedPermissionsPropertyTab: PermissionsPropertyTabsDict.office,
      OptionTitle: optionTitle,
      OptionValue: optionValue,
    });
    mp.trigger('cef_cl_corporations_permissions_auto_changeOption', data);
  } catch (e) {}
};

export { mpTrigger_corporations_permissions_property_openTab, mpTrigger_permissions_property_office_changeOption };
