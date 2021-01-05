import React, {CSSProperties} from 'react';
import classes from '../../../../styles/hud/components/Corporations/PermissionsTab/PermissionsTab.module.scss';
import RolesList from "./RolesList/RolesList";
import CommonPermissionsList from "./CommonPermissionsList/CommonPermissionsList";
import PermissionTabRightContent from "./PermissionTabRightContent/PermissionTabRightContent";

interface Props {
  dimensions: {
    width: number;
    height: number;
    topGap: number;
    leftGap: number;
  }
}

const PermissionsTab: React.FC<Props> = React.memo(({dimensions}) => {

  const containerStyles: CSSProperties = {
    width: dimensions.width,
    height: dimensions.height,
    top: dimensions.topGap,
    left: dimensions.leftGap
  }

  return (
    <div className={classes.PermissionsTab} style={containerStyles}>
      <div className={classes.RolesListWrapper}>
        <RolesList/>
      </div>
      <div className={classes.CommonPermissionsWrapper}>
        <CommonPermissionsList />
      </div>
      <div className={classes.RightContentWrapper}>
        <PermissionTabRightContent/>
      </div>
    </div>
  );
});

export default PermissionsTab;