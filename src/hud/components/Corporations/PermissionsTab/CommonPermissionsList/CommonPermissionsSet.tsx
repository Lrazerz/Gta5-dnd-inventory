import React, { CSSProperties } from 'react';
import { useDispatch } from 'react-redux';
import classes from '../../../../../styles/hud/components/Corporations/PermissionsTab/CommonPermissionsList/CommonPermissionsSet.module.scss';
import CorporationsText from '../../CorporationsText';
import { PermissionInterface, SingleRoleInterface } from '../../../../../models/hud/corporations/interfaces';
import permissions from '../../../../../redux/reducers/hud/corporations/tabs/permissions/permissions';
import TitleAndSwitchRow from '../../TitleAndSwitchRow';
import { permissionsChangePermission } from '../../../../../redux/actions/hud/corporations/tabs/permissions/permissions';
import { mpTrigger_corporations_permissions_changePermission } from '../../../../../utils/mpTriggers/hud/corporations/tabs/permissions/permissionsTriggers';

interface Props {
  selectedRole: SingleRoleInterface;
  title: string;
  permissions: PermissionInterface[];
}

const CommonPermissionsSet: React.FC<Props> = (props) => {
  const dispatch = useDispatch();

  const changePermissionHandler = (permission: PermissionInterface) => {
    dispatch(permissionsChangePermission(props.title, permission.title, !permission.value));
    mpTrigger_corporations_permissions_changePermission(
      props.selectedRole.title,
      props.title,
      permission.title,
      !permission.value,
    );
  };

  const titleTextStyles: CSSProperties = {
    fontWeight: 700,
    fontSize: '0.83rem',
    lineHeight: '1rem',
  };

  const permissionsBlock = props.permissions.map((permission) => {
    return (
      <div className={classes.PermissionWithSwitch} key={permission.title}>
        <TitleAndSwitchRow
          title={permission.title}
          value={permission.value}
          onChange={() => changePermissionHandler({ ...permission })}
        />
      </div>
    );
  });

  return (
    <div className={classes.CommonPermissionsSet}>
      <div className={classes.TitleWrapper}>
        <CorporationsText styles={titleTextStyles}>{props.title}</CorporationsText>
      </div>
      {permissions && permissionsBlock}
    </div>
  );
};

export default CommonPermissionsSet;
