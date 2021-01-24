import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import classes
  from '../../../../../../../styles/hud/components/Corporations/PermissionsTab/PermissionTabRightContent/subTabs/SubTabAuto/ModelsList.module.scss';
import CorporationsInput from "../../../../CorporationsInput";
import HorizontalLine from "../../../../HorizontalLine";
import {SingleAutoModelTitleInterface} from "../../../../../../models/corporations/interfaces";
import ModelsListItem from "./ModelsListItem";
import {permissionsAutoSelectModelAction} from "../../../../../../../redux/actions/hud/corporations/tabs/permissions/tabs/auto";
import {mpTrigger_corporations_permissions_auto_selectModel} from "../../../../../../../utils/mpTriggers/hud/hudMpTriggers";
import {maxModelLength} from "../../../../../../../constants/hud/corporations/corporationsConstants";

interface Props {
  models: SingleAutoModelTitleInterface[];
  selectedModelTitle: string;
  selectedRoleTitle: string;
}

const ModelsList: React.FC<Props> = React.memo((Props) => {

  const dispatch = useDispatch();

  const [searchText, setSearchText]: [string, any] = useState("");
  const [filteredModels, setFilteredModels]: [SingleAutoModelTitleInterface[], any] = useState();

  const selectModelHandler = (model: SingleAutoModelTitleInterface) => {
    if (Props.selectedModelTitle !== model.title) {
      dispatch(permissionsAutoSelectModelAction(model.title));
      mpTrigger_corporations_permissions_auto_selectModel(Props.selectedRoleTitle, model.title);
    }
  }

  const searchTextChangeHandler = (text: string) => {
    setSearchText(text);
  }

  useEffect(() => {
    if (searchText.length > 0) {
      setFilteredModels(Props.models.filter(model => model.title.toLowerCase().includes(searchText.toLowerCase())));
    } else {
      setFilteredModels(Props.models);
    }
  }, [searchText, Props.models])

  if (!Props.models || Props.models.length === 0) {
    return <div></div>;
  }

  const modelsListBlock = filteredModels && filteredModels.map(model => {
    return (
      <div key={model.title} onClick={() => selectModelHandler(model)}>
        <ModelsListItem title={model.title} isActive={model.title === Props.selectedModelTitle}/>
        <HorizontalLine/>
      </div>
    )
  });

  return (
    <div className={classes.ModelsList}>
      <div className={classes.SearchWrapper}>
        <CorporationsInput value={searchText} onChange={searchTextChangeHandler} placeholder={'Search'}
                           maxLength={maxModelLength}/>
      </div>
      <HorizontalLine/>
      <div className={classes.ListWrapper}>
        {modelsListBlock}
      </div>
    </div>
  );
});

export default ModelsList;