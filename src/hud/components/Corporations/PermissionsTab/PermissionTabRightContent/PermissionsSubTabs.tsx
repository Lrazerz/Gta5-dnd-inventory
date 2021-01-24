import React, {ReactElement} from 'react';
import {useSelector} from 'react-redux';
import classes
  from '../../../../../styles/hud/components/Corporations/PermissionsTab/PermissionTabRightContent/PermissionsSubTabs.module.scss';
import PermissionsSubTabsHeader from "./PermissionsSubTabsHeader";
import {CorporationsPermissionsTabsEnum} from "../../../../models/corporations/enums";
import SubTabAuto from "./subTabs/SubTabAuto/SubTabAuto";
import SubTabProperty from "./subTabs/SubTabProperty/SubTabProperty";

interface Props {

}

const PermissionsSubTabs = React.memo((Props) => {
``
  const openedTab = useSelector(state => state.hud.corporations.tabs.permissions.permissions.openedTab);
  const selectedRole = useSelector(state => state.hud.corporations.tabs.permissions.permissions.selectedRole);

  let tabContent: ReactElement;

  switch (openedTab) {
    case CorporationsPermissionsTabsEnum.modules: {
      tabContent = <div></div>;
      break;
    }
    case CorporationsPermissionsTabsEnum.houses: {
      tabContent = <div></div>;
      break;
    }
    case CorporationsPermissionsTabsEnum.enterprises: {
      tabContent = <div></div>;
      break;
    }
    case CorporationsPermissionsTabsEnum.auto: {
      tabContent = <SubTabAuto />;
      break;
    }
    case CorporationsPermissionsTabsEnum.property: {
      tabContent = <SubTabProperty />;
      break;
    }
  }

  return (
    <div className={classes.PermissionsSubTabs}>
      <div className={classes.Header}>
        <PermissionsSubTabsHeader openedRoleTitle={selectedRole && selectedRole.title} openedTab={openedTab}/>
      </div>
      <div className={classes.TabContent}>
        {tabContent}
      </div>
    </div>
  );
});

export default PermissionsSubTabs;