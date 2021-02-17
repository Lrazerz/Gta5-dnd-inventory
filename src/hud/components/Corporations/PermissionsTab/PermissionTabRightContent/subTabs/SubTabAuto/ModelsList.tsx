import React, { CSSProperties, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import classes from '../../../../../../../styles/hud/components/Corporations/PermissionsTab/PermissionTabRightContent/subTabs/SubTabAuto/ModelsList.module.scss';
import CorporationsInput from '../../../../CorporationsInput';
import HorizontalLine from '../../../../HorizontalLine';
import { SingleAutoModelTitleInterface } from '../../../../../../../models/hud/corporations/interfaces';
import ModelsListItem from './ModelsListItem';
import { permissionsAutoSelectModelAction } from '../../../../../../../redux/actions/hud/corporations/tabs/permissions/tabs/auto';
import { mpTrigger_corporations_permissions_auto_selectModel } from '../../../../../../../utils/mpTriggers/hud/corporations/tabs/permissions/permissionsTriggers';
import { maxModelLength, modelTitleRegex } from '../../../../../../../constants/hud/corporations/permissions/auto/auto';

interface Props {
  models: SingleAutoModelTitleInterface[];
  selectedModelTitle: string;
  selectedRoleTitle: string;
}

const ModelsList: React.FC<Props> = React.memo((props) => {
  const dispatch = useDispatch();

  const [searchText, setSearchText]: [string, any] = useState('');
  const [filteredModels, setFilteredModels]: [SingleAutoModelTitleInterface[], any] = useState();

  const selectModelHandler = (model: SingleAutoModelTitleInterface) => {
    if (props.selectedModelTitle !== model.title) {
      dispatch(permissionsAutoSelectModelAction(model.title));
      mpTrigger_corporations_permissions_auto_selectModel(props.selectedRoleTitle, model.title);
    }
  };

  const searchTextChangeHandler = (value: string) => {
    if (!modelTitleRegex.test(value)) {
      console.warn('[forb] role title search text does not match regex');
      return;
    }
    setSearchText(value);
  };

  useEffect(() => {
    if (searchText.length > 0) {
      setFilteredModels(props.models.filter((model) => model.title.toLowerCase().includes(searchText.toLowerCase())));
    } else {
      setFilteredModels(props.models);
    }
  }, [searchText, props.models]);

  const searchTextStyles: CSSProperties = {
    fontSize: '0.75rem',
    padding: '0 7%',
    fontWeight: 600,
  };

  if (!props.models || props.models.length === 0) {
    return <div></div>;
  }

  const modelsListBlock =
    filteredModels &&
    filteredModels.map((model) => {
      return (
        <div key={model.title} onClick={() => selectModelHandler(model)}>
          <ModelsListItem title={model.title} isActive={model.title === props.selectedModelTitle} />
          <HorizontalLine />
        </div>
      );
    });

  return (
    <div className={classes.ModelsList}>
      <div className={classes.SearchWrapper}>
        <CorporationsInput
          value={searchText}
          onChange={searchTextChangeHandler}
          placeholder={'Search'}
          maxLength={maxModelLength}
          styles={searchTextStyles}
        />
      </div>
      <HorizontalLine />
      <div className={classes.ListWrapper}>{modelsListBlock}</div>
    </div>
  );
});

export default ModelsList;
