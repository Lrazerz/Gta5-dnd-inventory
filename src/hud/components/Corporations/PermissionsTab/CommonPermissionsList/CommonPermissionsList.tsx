import React, {CSSProperties} from 'react';
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
    useSelector(({hud}) => hud.corporations.tabs.permissions.permissions.commonPermissionsSets);

  const horizontalLineWrapperStyles: CSSProperties = {
    boxSizing: 'border-box',
    padding: '0 7.95%'
  }

  if(!permissionsSets) {
    return <div className={classes.CommonPermissionsList}/>
  }

  return (
    <div className={classes.CommonPermissionsList}>
      <div className={classes.HeaderWrapper}>
        <CommonPermissionsHeader />
      </div>
      <div className={classes.InputWrapper}>
        <CorporationsInput value={""} onChange={() => {}} placeholder={"Название роли"}/>
      </div>
      <div style={horizontalLineWrapperStyles}>
        <HorizontalLine/>
      </div>
      <div className={classes.PermissionsSetsWrapper}>
        {permissionsSets.map(permSet => (
          <CommonPermissionsSet id={permSet.id} title={permSet.title} permissions={permSet.permissions} key={permSet.id}/>
        ))}
      </div>
    </div>
  );
});

export default CommonPermissionsList;