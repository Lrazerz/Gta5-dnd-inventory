import React from 'react';
import {useSelector} from 'react-redux';
import classes
  from '../../../../../../../styles/hud/components/Corporations/PermissionsTab/PermissionTabRightContent/subTabs/SubTabAuto/SubTabAuto.module.scss';
import ModelsList from "./ModelsList";
import ModelInfo from "./ModelInfo";

interface Props {

}

const SubTabAuto: React.FC<Props> = React.memo(() => {

  const {models, selectedModelInfo} = useSelector(({hud}) => hud.corporations.tabs.permissions.tabs.auto);

  return (
    <div className={classes.SubTabAuto}>
      <div className={classes.ModelsListWrapper}>
        <ModelsList models={models} selectedModelId={selectedModelInfo && selectedModelInfo.id}/>
      </div>
      <div className={classes.ModelInfoWrapper}>
        <ModelInfo info={selectedModelInfo} />
      </div>

    </div>
  );
});

export default SubTabAuto;