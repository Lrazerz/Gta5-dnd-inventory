import React, { CSSProperties } from 'react';
import { useDispatch } from 'react-redux';
import classes from '../../../../../../../styles/hud/components/Corporations/PermissionsTab/PermissionTabRightContent/subTabs/SubTabAuto/ModelInfo.module.scss';
import {
  PermissionInterface,
  PermissionsAutoModelInterface,
} from '../../../../../../../models/hud/corporations/interfaces';
import HorizontalLine from '../../../../HorizontalLine';
import CorporationsText from '../../../../CorporationsText';
import { corporationsTheme } from '../../../../../../../constants/hud/corporations/corporationsTheme';
import TitleAndSwitchRow from '../../../../TitleAndSwitchRow';
import {
  permissionsAutoChangeOption,
  permissionsAutoChangePermission,
} from '../../../../../../../redux/actions/hud/corporations/tabs/permissions/tabs/auto';
import {
  mpTrigger_corporations_permissions_auto_changePermission,
  mpTrigger_corporations_permissions_auto_changeOption,
} from '../../../../../../../utils/mpTriggers/hud/corporations/tabs/permissions/permissionsTriggers';
import CorporationsPermissionsRow from '../common/CorporationsPermissionsRow';
import { RowFieldTypeEnum } from '../../../../../../../models/hud/corporations/enums';
import CorporationsGraySquare from '../../../../CorporationsGraySquare';
import CorporationsDropdown from '../../../../CorporationsDropdown';
import LoadingIndicator from '../../../../../common/LoadingIndicator/LoadingIndicator';

interface Props {
  info: PermissionsAutoModelInterface;
  selectedRoleTitle: string;
}

const ModelInfo: React.FC<Props> = React.memo((props) => {
  const dispatch = useDispatch();

  // title will be even if no data (pick model cause to add selected model title to redux)
  if (!props.info || (!props.info.options && !props.info.permissions)) {
    return (
      <div className={classes.ModelInfo}>
        <LoadingIndicator />
      </div>
    );
  }

  const changeOptionHandler = (optionTitle: string, optionValue: string | boolean) => {
    dispatch(permissionsAutoChangeOption(optionTitle, optionValue));
    mpTrigger_corporations_permissions_auto_changeOption(
      props.selectedRoleTitle,
      props.info.title,
      optionTitle,
      optionValue,
    );
  };

  const changePermissionHandler = (permission: PermissionInterface) => {
    dispatch(permissionsAutoChangePermission(permission.title, !permission.value));
    mpTrigger_corporations_permissions_auto_changePermission(
      props.selectedRoleTitle,
      props.info.title,
      permission.title,
      !permission.value,
    );
  };
  //
  // const availableInventorySlotsInfo: JSX.Element =
  //   <CorporationsGraySquare title={propsinfo.availableInventorySlots.toString()}/>
  //
  // const responsibleForAutoBlock: JSX.Element =
  //   <CorporationsDropdown selectedItem={propsinfo.responsible}
  //                         list={propsinfo.potentialResponsibles}
  //                         onSelect={selectResponsibleHandler}/>
  //
  // const availableGarageSlotsInfo: JSX.Element =
  //   <CorporationsGraySquare title={propsinfo.availableGaragePlaces.toString()}/>;

  const permissionTitleTextStyles: CSSProperties = {
    width: '100%',
    boxSizing: 'border-box',
    paddingTop: '5.96%',
    paddingLeft: '3.55%',
    fontSize: '0.8235rem',
    lineHeight: '1rem',
    color: corporationsTheme.bg_malibu,
  };

  const horizontalLineStyles: CSSProperties = {
    backgroundColor: corporationsTheme.delimiter_gray,
  };

  const optionsBlock: JSX.Element[] = props.info.options.map(({ option }) => {
    let rightElement: JSX.Element;

    switch (option.type) {
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
        rightElement = (
          <CorporationsDropdown
            selectedItem={option.value.toString()}
            list={option.potentialValues}
            onSelect={(newValue) => changeOptionHandler(option.title, newValue)}
          />
        );
        break;
      }
    }

    return (
      <div className={classes.ModelInfoRowContainer} key={option.title}>
        <div className={classes.ModelInfoRowWrapper}>
          <CorporationsPermissionsRow title={option.title} rightElement={rightElement} />
        </div>
        <HorizontalLine styles={horizontalLineStyles} />
      </div>
    );
  });

  const permissionsBlock: JSX.Element[] = props.info.permissions.map((permission) => {
    return (
      <div key={permission.title}>
        <div className={classes.PermissionWrapper}>
          <TitleAndSwitchRow
            title={permission.title}
            value={permission.value}
            onChange={() => changePermissionHandler({ ...permission })}
          />
        </div>
        <HorizontalLine styles={horizontalLineStyles} />
      </div>
    );
  }, []);

  return (
    <div className={classes.ModelInfo}>
      {/*<div className={classes.ModelInfoRowWrapper}>*/}
      {/*  /!*<ModelInfoRow title={"Слотов доступно в инвентаре"} rightElement={availableInventorySlotsInfo}/>*!/*/}
      {/*</div>*/}
      {/*<HorizontalLine styles={horizontalLineStyles}/>*/}
      {/*<div className={classes.ModelInfoRowWrapper}>*/}
      {/*  /!*<ModelInfoRow title={"Ответственный"} rightElement={responsibleForAutoBlock}/>*!/*/}
      {/*</div>*/}
      {/*<HorizontalLine styles={horizontalLineStyles}/>*/}
      {/*<div className={classes.ModelInfoRowWrapper}>*/}
      {/*  /!*<ModelInfoRow title={"Доступно мест в гараже"} rightElement={availableGarageSlotsInfo}/>*!/*/}
      {/*</div>*/}
      {/*<HorizontalLine styles={horizontalLineStyles}/>*/}
      <div className={classes.OptionsWrapper}>{optionsBlock}</div>
      <CorporationsText styles={permissionTitleTextStyles}>Разрешения</CorporationsText>
      <div className={classes.PermissionsWrapper}>{permissionsBlock}</div>
    </div>
  );
});

export default ModelInfo;
