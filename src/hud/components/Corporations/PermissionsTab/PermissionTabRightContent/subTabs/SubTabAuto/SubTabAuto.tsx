import React from 'react';
import {useSelector} from 'react-redux';
import classes
  from '../../../../../../../styles/hud/components/Corporations/PermissionsTab/PermissionTabRightContent/subTabs/SubTabAuto/SubTabAuto.module.scss';
import ModelsList from "./ModelsList";
import ModelInfo from "./ModelInfo";

interface Props {

}

const SubTabAuto: React.FC<Props> = React.memo(() => {

  // при открытии техники приходит инфа о 1-й модели если такая есть
  // список моделей и при открытии одной модели запрашивать на сервере список разрешений и т.п.
  const {models, selectedModelInfo} = useSelector(({hud}) => hud.corporations.tabs.permissions.auto);

  console.log('SubTabAuto models', models, selectedModelInfo)
  return (
    <div className={classes.SubTabAuto}>
      <div className={classes.ModelsListWrapper}>
        <ModelsList models={models} selectedModelId={selectedModelInfo.id}/>
      </div>
      <div className={classes.ModelInfoWrapper}>
        <ModelInfo info={selectedModelInfo} />
      </div>

    </div>
  );
});

export default SubTabAuto;