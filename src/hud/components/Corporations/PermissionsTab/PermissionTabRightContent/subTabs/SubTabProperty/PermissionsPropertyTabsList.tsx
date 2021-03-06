import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from '../../../../../../../styles/hud/components/Corporations/PermissionsTab/PermissionTabRightContent/subTabs/SubTabProperty/PermissionsPropertyTabsList.module.scss';
import ModelsListItem from '../SubTabAuto/ModelsListItem';
import HorizontalLine from '../../../../HorizontalLine';
import {
  PermissionsPropertyDisplayedTabsRussian,
  PermissionsPropertyTabsDict,
  PermissionsPropertyTabsEnum,
} from '../../../../../../../models/hud/corporations/tabs/permissions/tabs/propertyEnums';
import { permissionsPropertyOpenTabAction } from '../../../../../../../redux/actions/hud/corporations/tabs/permissions/tabs/property/property';
import { mpTrigger_corporations_permissions_property_openTab } from '../../../../../../../utils/mpTriggers/hud/corporations/tabs/permissions/tabs/permissionsPropertyTriggers';
import { SingleRoleInterface } from '../../../../../../../models/hud/corporations/interfaces';

interface Props {
  openedTab: PermissionsPropertyTabsEnum;
  openedRole: SingleRoleInterface;
}

const PermissionsPropertyTabsList: React.FC<Props> = React.memo((props) => {
  const dispatch = useDispatch();

  const activeTabRussian = PermissionsPropertyTabsDict[PermissionsPropertyTabsEnum[props.openedTab]];

  const selectTabHandler = (tabRussian: string) => {
    let newTabEng: string;

    for (const key in PermissionsPropertyTabsDict) {
      if (PermissionsPropertyTabsDict[key].toLowerCase() === tabRussian.toLowerCase()) {
        newTabEng = key;
      }
    }

    const newTab: PermissionsPropertyTabsEnum = PermissionsPropertyTabsEnum[newTabEng];

    dispatch(permissionsPropertyOpenTabAction(newTab));
    mpTrigger_corporations_permissions_property_openTab(props.openedRole, tabRussian);
  };

  const tabsBlock: JSX.Element[] = PermissionsPropertyDisplayedTabsRussian.map((tabRussian) => {
    return (
      <div key={tabRussian} onClick={() => selectTabHandler(tabRussian)}>
        <ModelsListItem
          title={tabRussian}
          isActive={activeTabRussian.toLowerCase() === tabRussian.toLowerCase()}
          padding={'17.03%'}
        />
        <HorizontalLine />
      </div>
    );
  });

  return (
    <div className={classes.PermissionsPropertyTabsList}>
      <div className={classes.ListWrapper}>{tabsBlock}</div>
    </div>
  );
});

export default PermissionsPropertyTabsList;
