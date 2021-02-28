import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from '../../../../../../../styles/hud/components/Corporations/PermissionsTab/PermissionTabRightContent/subTabs/SubTabProperty/SubTabProperty.module.scss';
import PermissionsPropertyTabsList from './PermissionsPropertyTabsList';
import { PermissionsPropertyTabsEnum } from '../../../../../../../models/hud/corporations/tabs/permissions/tabs/propertyEnums';
import { SingleRoleInterface } from '../../../../../../../models/hud/corporations/interfaces';
import PropertyOfficeTab from './tabs/PropertyOfficeTab';
import { PermissionsPropertyOfficeInitialStateInterface } from '../../../../../../../models/hud/corporations/tabs/permissions/tabs/propertyInterfaces';
import { window_corporations_permissions_property_openOffice } from '../../../../../../../utils/windowFuncs/hud/Corporations/tabs/permissions/tabs/property';
import { permissionsPropertyOfficeSetOptions } from '../../../../../../../redux/actions/hud/corporations/tabs/permissions/tabs/property/tabs/office';

const SubTabProperty = React.memo(() => {
  const dispatch = useDispatch();

  const openedTab: PermissionsPropertyTabsEnum = useSelector(
    (state) => state.hud.corporations.tabs.permissions.tabs.property.property.openedTab,
  );
  const openedRole: SingleRoleInterface = useSelector(
    (state) => state.hud.corporations.tabs.permissions.permissions.selectedRole,
  );

  useEffect(() => {
    // @ts-ignore
    if (!window.permissions_property_openOffice) {
      // @ts-ignore
      window.permissions_property_openOffice = (jsonData) => {
        const parsedData: PermissionsPropertyOfficeInitialStateInterface = window_corporations_permissions_property_openOffice(
          jsonData,
        );
        dispatch(permissionsPropertyOfficeSetOptions(parsedData));
      };
    }
  }, []);

  let tabBlock: JSX.Element;

  switch (openedTab) {
    case PermissionsPropertyTabsEnum.bases: {
      tabBlock = <div />;
      break;
    }
    case PermissionsPropertyTabsEnum.office: {
      tabBlock = <PropertyOfficeTab />;
      break;
    }
    default: {
      tabBlock = <div />;
      break;
    }
  }

  return (
    <div className={classes.SubTabProperty}>
      <div className={classes.TabsListWrapper}>
        <PermissionsPropertyTabsList openedTab={openedTab} openedRole={openedRole} />
      </div>
      <div className={classes.TabContentWrapper}>{tabBlock}</div>
    </div>
  );
});

export default SubTabProperty;
