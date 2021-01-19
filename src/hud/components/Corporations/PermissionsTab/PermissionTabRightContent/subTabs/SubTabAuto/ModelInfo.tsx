import React, {CSSProperties} from 'react';
import {useDispatch} from 'react-redux';
import classes
  from '../../../../../../../styles/hud/components/Corporations/PermissionsTab/PermissionTabRightContent/subTabs/SubTabAuto/ModelInfo.module.scss';
import {
  PermissionInterface,
  PermissionsAutoModelInterface,
  ResponsibleForAutoInterface
} from "../../../../../../models/corporations/interfaces";
import ModelInfoRow from "./ModelInfoRow";
import CorporationsGraySquare from "../../../../CorporationsGraySquare";
import CorporationsDropdown from "../../../../CorporationsDropdown";
import HorizontalLine from "../../../../HorizontalLine";
import CorporationsText from "../../../../CorporationsText";
import {corporationsTheme} from "../../../../consts/corporationsTheme";
import TitleAndSwitchRow from "../../../../TitleAndSwitchRow";
import {
  permissionsAutoChangePermission,
  permissionsAutoChangeResponsibleAction
} from "../../../../../../../redux/actions/hud/corporations/tabs/permissions/tabs/auto";
import {
  mpTrigger_corporations_permissions_auto_changePermission,
  mpTrigger_corporations_permissions_auto_changeResponsible
} from "../../../../../../../utils/mpTriggers/hud/hudMpTriggers";
import LoadingIndicator from "../../../../../common/LoadingIndicator/LoadingIndicator";

interface Props {
  info: PermissionsAutoModelInterface;
}

const ModelInfo: React.FC<Props> = React.memo((Props) => {

  const dispatch = useDispatch();

  // id will be even if no data (pick model cause to add selected model id to redux)
  console.log('Props infod', Props.info);
  if(!Props.info || !Props.info.availableInventorySlots) {
    return (
      <div className={classes.ModelInfo}>
        <LoadingIndicator />
      </div>
    )
  }

  const selectResponsibleHandler = (listItem: ResponsibleForAutoInterface) => {
    dispatch(permissionsAutoChangeResponsibleAction(listItem.id));
    mpTrigger_corporations_permissions_auto_changeResponsible(Props.info.title, listItem.title);
  }

  const changePermissionHandler = (permission: PermissionInterface) => {
    dispatch(permissionsAutoChangePermission(permission.id, !permission.value));
    mpTrigger_corporations_permissions_auto_changePermission(Props.info.title, permission.title, !permission.value);
  }

  const availableInventorySlotsInfo: JSX.Element =
    <CorporationsGraySquare title={Props.info.availableInventorySlots.toString()}/>

  const responsibleForAutoBlock: JSX.Element =
    <CorporationsDropdown selectedItem={Props.info.responsible}
                          list={Props.info.potentialResponsibles}
                          onSelect={selectResponsibleHandler}/>

  const availableGarageSlotsInfo: JSX.Element =
    <CorporationsGraySquare title={Props.info.availableGaragePlaces.toString()}/>;

  const permissionTitleTextStyles: CSSProperties = {
    width: '100%',
    paddingTop: '5.96%',
    paddingLeft: '3.55%',
    fontSize: '0.8235rem',
    lineHeight: '1rem',
    color: corporationsTheme.bg_malibu
  }

  const horizontalLineStyles: CSSProperties = {
    backgroundColor: '#393D4D'
  }

  const permissionsBlock: JSX.Element[] = Props.info.permissions.map(permission => {
    return (
      <div key={permission.id}>
      <div className={classes.PermissionWrapper}>
        <TitleAndSwitchRow title={permission.title} value={permission.value}
                           onChange={() => changePermissionHandler({...permission})} />
      </div>
      <HorizontalLine styles={horizontalLineStyles}/>
      </div>
    )
  }, []);

  return (
    <div className={classes.ModelInfo}>
      <div className={classes.ModelInfoRowWrapper}>
        <ModelInfoRow title={"Слотов доступно в инвентаре"} rightElement={availableInventorySlotsInfo}/>
      </div>
      <HorizontalLine styles={horizontalLineStyles}/>
      <div className={classes.ModelInfoRowWrapper}>
        <ModelInfoRow title={"Ответственный"} rightElement={responsibleForAutoBlock}/>
      </div>
      <HorizontalLine styles={horizontalLineStyles}/>
      <div className={classes.ModelInfoRowWrapper}>
        <ModelInfoRow title={"Доступно мест в гараже"} rightElement={availableGarageSlotsInfo}/>
      </div>
      <HorizontalLine styles={horizontalLineStyles}/>
      <CorporationsText styles={permissionTitleTextStyles}>
        Разрешения
      </CorporationsText>
      <div className={classes.PermissionsWrapper}>
        {permissionsBlock}
      </div>
    </div>
  );
});

export default ModelInfo;