import React from 'react';
import classes
  from '../../../../../styles/hud/components/Corporations/PermissionsTab/PermissionTabRightContent/PermissionTabRightContent.module.scss';
import CorporationsHeader from "../../CorporationsHeader";
import {CorporationsTabsEnum} from "../../../../models/corporations/enums";
import PermissionsSubTabs from "./PermissionsSubTabs";

const PermissionTabRightContent = React.memo(() => {
  return (
    <div className={classes.PermissionTabRightContent}>
      <div className={classes.HeaderWrapper}>
        <CorporationsHeader openedTab={CorporationsTabsEnum.permissions}/>
      </div>
      <div className={classes.ContentWrapper}>
        <PermissionsSubTabs />
      </div>
    </div>
  );
});

export default PermissionTabRightContent;