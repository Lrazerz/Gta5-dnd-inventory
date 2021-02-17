import React from 'react';
import { useSelector } from 'react-redux';
import classes from '../../../../../../../styles/hud/components/Corporations/PermissionsTab/PermissionTabRightContent/subTabs/SubTabAuto/SubTabAuto.module.scss';
import ModelsList from './ModelsList';
import ModelInfo from './ModelInfo';
import LoadingIndicator from '../../../../../common/LoadingIndicator/LoadingIndicator';

interface Props {}

const SubTabAuto: React.FC<Props> = React.memo(() => {
  const selectedRole = useSelector((state) => state.hud.corporations.tabs.permissions.permissions.selectedRole);
  const models = useSelector((state) => state.hud.corporations.tabs.permissions.tabs.auto.models);
  const selectedModelInfo = useSelector((state) => state.hud.corporations.tabs.permissions.tabs.auto.selectedModelInfo);

  if (!models) {
    return (
      <div className={classes.SubTabAuto}>
        <LoadingIndicator />
      </div>
    );
  }

  return (
    <div className={classes.SubTabAuto}>
      <div className={classes.ModelsListWrapper}>
        <ModelsList
          models={models}
          selectedModelTitle={selectedModelInfo && selectedModelInfo.title}
          selectedRoleTitle={selectedRole && selectedRole.title}
        />
      </div>
      <div className={classes.ModelInfoWrapper}>
        <ModelInfo info={selectedModelInfo} selectedRoleTitle={selectedRole && selectedRole.title} />
      </div>
    </div>
  );
});

export default SubTabAuto;
