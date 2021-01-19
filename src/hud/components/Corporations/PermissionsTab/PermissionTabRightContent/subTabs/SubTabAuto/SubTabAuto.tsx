import React from 'react';
import {useSelector} from 'react-redux';
import classes
  from '../../../../../../../styles/hud/components/Corporations/PermissionsTab/PermissionTabRightContent/subTabs/SubTabAuto/SubTabAuto.module.scss';
import ModelsList from "./ModelsList";
import ModelInfo from "./ModelInfo";
import LoadingIndicator from "../../../../../common/LoadingIndicator/LoadingIndicator";

interface Props {

}

const SubTabAuto: React.FC<Props> = React.memo(() => {

  const {models, selectedModelInfo} = useSelector(({hud}) => hud.corporations.tabs.permissions.tabs.auto);

  if(!models) {
    return (
      <div className={classes.SubTabAuto}>
        <LoadingIndicator/>
      </div>
    )
  }

  console.log('SUbTabAuto selectedModelInfo', selectedModelInfo);
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