import React, {CSSProperties} from 'react';
import classes
  from '../../../../../../../styles/hud/components/Corporations/PermissionsTab/PermissionTabRightContent/subTabs/SubTabAuto/ModelInfo.module.scss';
import {PermissionsAutoModelInterface} from "../../../../../../models/corporations/interfaces";
import ModelInfoRow from "./ModelInfoRow";
import CorporationsGraySquare from "../../../../CorporationsGraySquare";
import CorporationsDropdown from "../../../../CorporationsDropdown";
import HorizontalLine from "../../../../HorizontalLine";
import CorporationsText from "../../../../CorporationsText";
import {corporationsTheme} from "../../../../consts/corporationsTheme";
import TitleAndSwitchRow from "../../../../TitleAndSwitchRow";

interface Props {
  info: PermissionsAutoModelInterface;
}

const ModelInfo: React.FC<Props> = React.memo((Props) => {

  const selectResponsibleHandler = () => {

  }

  const availableInventorySlotsInfo: JSX.Element =
    <CorporationsGraySquare title={Props.info.availableInventorySlots.toString()}/>

  const responsibleForAutoBlock: JSX.Element =
    <CorporationsDropdown selectedItem={Props.info.responsible}
                          list={Props.info.potentialResponsible}
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
        <TitleAndSwitchRow title={permission.title} value={permission.value} onChange={() => {}} />
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