import React, {CSSProperties, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import classes
  from '../../../../../styles/hud/components/Corporations/PermissionsTab/CommonPermissionsList/CommonPermissionsList.module.scss';
import CommonPermissionsHeader from "./CommonPermissionsHeader";
import CorporationsInput from "../../CorporationsInput";
import HorizontalLine from "../../HorizontalLine";
import {CommonPermissionsSetInterface} from "../../../../models/corporations/interfaces";
import CommonPermissionsSet from "./CommonPermissionsSet";
import {
  commonPermissionTitleRegex,
  maxCommonPermissionLength
} from "../../../../../constants/hud/corporations/permissions/permissions";
import LoadingIndicator from "../../../common/LoadingIndicator/LoadingIndicator";

interface Props {

}

const CommonPermissionsList: React.FC<Props> = React.memo(() => {

  const [searchText, setSearchText] = useState("");
  const [filteredPermissionsSets, setFilteredPermissionsSets]:
    [CommonPermissionsSetInterface[], any] = useState();

  const permissionsSetsRedux = useSelector(state => state.hud.corporations.tabs.permissions.permissions.commonPermissionsSets);
  const selectedRole = useSelector(state => state.hud.corporations.tabs.permissions.permissions.selectedRole);

  const permissionsSets: CommonPermissionsSetInterface[] = permissionsSetsRedux;

  useEffect(() => {
    if (searchText.length > 0) {
      const resultFilteredSets = [];

      for (let i = 0; i < permissionsSets.length; i++) {
        if (permissionsSets[i].title.toLowerCase().includes(searchText.toLowerCase())) {
          resultFilteredSets.push(permissionsSets[i]);
        } else {
          for (let j = 0; j < permissionsSets[i].permissions.length; j++) {
            if (permissionsSets[i].permissions[j].title.toLowerCase().includes(searchText.toLowerCase())) {

              let addedSetIdx: number = -1;

              for (let k = 0; k < resultFilteredSets.length; k++) {
                if (resultFilteredSets[k].title === permissionsSets[i].title) {
                  addedSetIdx = k;
                  resultFilteredSets[k].permissions.push(permissionsSets[i].permissions[j]);
                }
              }

              if(addedSetIdx !== -1) {
                resultFilteredSets[addedSetIdx].permissions.push(permissionsSets[i].permissions[j]);
              } else {
                resultFilteredSets.push({...permissionsSets[i], permissions: [permissionsSets[i].permissions[j]]});
              }
            }
          }
        }
      }
      setFilteredPermissionsSets(resultFilteredSets);
    } else {
      setFilteredPermissionsSets(permissionsSets);
    }
  }, [searchText, permissionsSets]);

  const setSearchTextHandler = (value) => {
    if(!commonPermissionTitleRegex.test(value)) {
      console.warn('[forb] common perm title search text does not match regex');
      return;
    }
    setSearchText(value);
  }

  const horizontalLineWrapperStyles: CSSProperties = {
    boxSizing: 'border-box',
    padding: '0 7.95%'
  }

  const searchTextStyles: CSSProperties = {
    paddingLeft: 0,
    paddingRight: 0,
    fontSize: '0.75rem',
    fontWeight: 600
  }

  if(!permissionsSetsRedux) {
      return (
        <div className={classes.CommonPermissionsList}>
          <div className={classes.HeaderWrapper}>
            <CommonPermissionsHeader/>
          </div>
          <div className={classes.LoadingWrapper}>
            <LoadingIndicator />
          </div>
        </div>
      )
  }

  return (
    <div className={classes.CommonPermissionsList}>
      <div className={classes.HeaderWrapper}>
        <CommonPermissionsHeader/>
      </div>
      <div className={classes.InputWrapper}>
        <CorporationsInput styles={searchTextStyles} maxLength={maxCommonPermissionLength}
                           value={searchText} onChange={setSearchTextHandler} placeholder={"Название разрешения..."}/>
      </div>
      <div style={horizontalLineWrapperStyles}>
        <HorizontalLine/>
      </div>
      <div className={classes.PermissionsSetsWrapper}>
        {permissionsSets && filteredPermissionsSets && filteredPermissionsSets.map(permSet => (
          <CommonPermissionsSet selectedRole={selectedRole} title={permSet.title} permissions={permSet.permissions}
                                key={permSet.title}/>
        ))}
      </div>
    </div>
  );
});

export default CommonPermissionsList;