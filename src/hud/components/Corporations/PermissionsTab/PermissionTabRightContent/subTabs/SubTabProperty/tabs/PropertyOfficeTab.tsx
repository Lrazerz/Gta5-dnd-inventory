import React, {CSSProperties} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import classes from '../../../../../../../../styles/hud/components/Corporations/PermissionsTab/PermissionTabRightContent/subTabs/SubTabProperty/tabs/PropertyOfficeTab.module.scss';
import CorporationsPermissionsRow from "../../common/CorporationsPermissionsRow";
import HorizontalLine from "../../../../../HorizontalLine";
import {RowFieldTypeEnum} from "../../../../../../../models/corporations/enums";
import CorporationsGraySquare from "../../../../../CorporationsGraySquare";
import CorporationsDropdown from "../../../../../CorporationsDropdown";
import {corporationsTheme} from "../../../../../../../../constants/hud/corporations/corporationsTheme";
import {permissionsPropertyOfficeChangeOption} from "../../../../../../../../redux/actions/hud/corporations/tabs/permissions/tabs/property/tabs/office";
import {mpTrigger_permissions_property_office_changeOption} from "../../../../../../../../utils/mpTriggers/hud/corporations/tabs/permissions/tabs/permissionsPropertyTriggers";
import {SingleRoleInterface} from "../../../../../../../models/corporations/interfaces";

interface Props {

}

const PropertyOfficeTab: React.FC<Props> = React.memo(() => {

  const dispatch = useDispatch();

  const optionsRedux = useSelector(state => state.hud.corporations.tabs.permissions.tabs.property.tabs.office.options);
  const selectedRole: SingleRoleInterface = useSelector(state => state.hud.corporations.tabs.permissions.permissions.selectedRole);

  const changeOptionHandler = (title, value) => {
    const selectedRoleTitle = selectedRole ? selectedRole.title : null;
    dispatch(permissionsPropertyOfficeChangeOption(title, value));
    mpTrigger_permissions_property_office_changeOption(selectedRoleTitle, title, value);
  }

  const horizontalLineStyles: CSSProperties = {
    backgroundColor: corporationsTheme.delimiter_gray,
  }

  const optionsBlock: JSX.Element[] = optionsRedux && optionsRedux.map(({option}) => {

    let rightElement: JSX.Element;

    switch(option.type) {
      case RowFieldTypeEnum.label: {
        rightElement = <CorporationsGraySquare title={option.value.toString()} />;
        break;
      }
      case RowFieldTypeEnum.editableLabel: {
        rightElement = <div>todo</div>;
        break;
      }
      case RowFieldTypeEnum.switch: {
        rightElement = <div>todo</div>;
        break;
      }
      case RowFieldTypeEnum.dropdown: {
        rightElement = <CorporationsDropdown selectedItem={option.value.toString()} list={option.potentialValues}
                                             onSelect={(newValue) => changeOptionHandler(option.title, newValue)} />;
        break;
      }
    }

    return (
      <div className={classes.OptionRowContainer} key={option.title}>
        <div className={classes.OptionRowWrapper}>
          <CorporationsPermissionsRow title={option.title} rightElement={rightElement} />
        </div>
        <HorizontalLine styles={horizontalLineStyles}/>
      </div>
    )
  })

  return (
    <div className={classes.PropertyOfficeTab}>
      {optionsBlock}
    </div>
  );
});

export default PropertyOfficeTab;