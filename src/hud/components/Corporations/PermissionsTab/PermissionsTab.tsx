import React, { CSSProperties, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import classes from '../../../../styles/hud/components/Corporations/PermissionsTab/PermissionsTab.module.scss';
import RolesList from './RolesList/RolesList';
import CommonPermissionsList from './CommonPermissionsList/CommonPermissionsList';
import PermissionTabRightContent from './PermissionTabRightContent/PermissionTabRightContent';
import {
  corporationsPermissionsOpenAutoTab,
  corporationsPermissionsOpenRole,
  corporationsRefreshPermissions,
} from '../../../../utils/windowFuncs/hud/Corporations/CorporationsInterceptors';
import {
  permissionsRefreshPermissions,
  permissionsSetRoleInfoAction,
} from '../../../../redux/actions/hud/corporations/tabs/permissions/permissions';
import { CommonPermissionsSetInterface } from '../../../../models/hud/corporations/interfaces';
import { permissionsAutoSetDataAction } from '../../../../redux/actions/hud/corporations/tabs/permissions/tabs/auto';

interface Props {
  dimensions: {
    width: number;
    height: number;
    topGap: number;
    leftGap: number;
  };
}

const PermissionsTab: React.FC<Props> = React.memo(({ dimensions }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    if (!window.corporations_permissions_openRole) {
      // @ts-ignore
      window.corporations_permissions_openRole = (roleDataJson) => {
        const { commonPermissionsSets, modules } = corporationsPermissionsOpenRole(roleDataJson);
        dispatch(permissionsSetRoleInfoAction({ commonPermissionsSets }));
      };
    }

    // @ts-ignore
    if (!window.corporations_permissions_RefreshPermissions) {
      // @ts-ignore
      window.corporations_permissions_RefreshPermissions = (permissionsDataJson) => {
        const commonPermissionsSets: CommonPermissionsSetInterface[] = corporationsRefreshPermissions(
          permissionsDataJson,
        );
        dispatch(permissionsRefreshPermissions(commonPermissionsSets));
      };
    }

    // @ts-ignore
    if (!window.corporations_permissions_openAutoTab) {
      // @ts-ignore
      window.corporations_permissions_openAutoTab = (autoData: string) => {
        const parsedData = corporationsPermissionsOpenAutoTab(autoData);
        dispatch(permissionsAutoSetDataAction(parsedData));
      };
    }

    return () => {
      // @ts-ignore
      window.corporations_permissions_openRole = undefined;
      // @ts-ignore
      window.corporations_permissions_RefreshPermissions = undefined;
      // @ts-ignore
      window.corporations_permissions_openAutoTab = undefined;
    };
  });

  const containerStyles: CSSProperties = {
    width: dimensions.width,
    height: dimensions.height,
    top: dimensions.topGap,
    left: dimensions.leftGap,
  };

  return (
    <div className={classes.PermissionsTab} style={containerStyles}>
      <div className={classes.RolesListWrapper}>
        <RolesList />
      </div>
      <div className={classes.CommonPermissionsWrapper}>
        <CommonPermissionsList />
      </div>
      <div className={classes.RightContentWrapper}>
        <PermissionTabRightContent />
      </div>
    </div>
  );
});

export default PermissionsTab;
