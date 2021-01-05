import React from 'react';
import {useSelector} from 'react-redux';
import classes from '../../../../../styles/hud/components/Corporations/PermissionsTab/CommonPermissionsList/CommonPermissionsList.module.scss';
import CommonPermissionsHeader from "./CommonPermissionsHeader";
import CorporationsInput from "../../CorporationsInput";
import HorizontalLine from "../../HorizontalLine";
import {CommonPermissionsSetInterface} from "../../../../models/corporations/interfaces";
import CommonPermissionsSet from "./CommonPermissionsSet";

interface Props {

}

const CommonPermissionsList: React.FC<Props> = React.memo(() => {

  const permissionsSets: CommonPermissionsSetInterface[] =
    useSelector(({hud}) => hud.corporations.tabs.permissions.commonPermissions);

  console.log(permissionsSets);

  return (
    <div className={classes.CommonPermissionsList}>
      <div className={classes.HeaderWrapper}>
        <CommonPermissionsHeader />
      </div>
      <div className={classes.InputWrapper}>
        <CorporationsInput value={""} onChange={() => {}} placeholder={"Название роли"}/>
      </div>
      <HorizontalLine/>
      <div className={classes.PermissionsSetsWrapper}>
        {permissionsSets.map(permSet => (
          <CommonPermissionsSet title={permSet.title} permissions={permSet.permissions} key={permSet.title}/>
        ))}
      </div>
    </div>
  );
});

export default CommonPermissionsList;