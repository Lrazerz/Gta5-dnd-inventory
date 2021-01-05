import React, {ReactElement} from 'react';
import classes
  from '../../../../../../../styles/hud/components/Corporations/PermissionsTab/PermissionTabRightContent/subTabs/SubTabAuto/ModelsList.module.scss';
import CorporationsInput from "../../../../CorporationsInput";
import HorizontalLine from "../../../../HorizontalLine";
import {SingleAutoModelTitle} from "../../../../../../models/corporations/interfaces";
import ModelsListItem from "./ModelsListItem";

interface Props {
  models: SingleAutoModelTitle[];
  selectedModelId: string;
}

const ModelsList: React.FC<Props> = React.memo((Props) => {

  const modelsListBlock = Props.models.map(model => {
    return (
      <div key={model.id}>
        <ModelsListItem title={model.title} isActive={model.id === Props.selectedModelId}/>
        <HorizontalLine/>
      </div>
    )
  })

  return (
    <div className={classes.ModelsList}>
      <div className={classes.SearchWrapper}>
        <CorporationsInput value={''} onChange={() => {}} placeholder={'Search'} />
      </div>
      <HorizontalLine/>
      <div className={classes.ListWrapper}>
        {modelsListBlock}
      </div>
    </div>
  );
});

export default ModelsList;