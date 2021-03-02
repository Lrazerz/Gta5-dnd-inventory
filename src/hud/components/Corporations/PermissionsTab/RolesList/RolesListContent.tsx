import React, { CSSProperties, ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import classes from '../../../../../styles/hud/components/Corporations/PermissionsTab/RolesList/RolesListContent.module.scss';
import circlesImg from '../../../../../assets/hud/images/components/Corporations/PermissionsTab/circles.svg';
import newRoleImg from '../../../../../assets/hud/images/components/Corporations/newRole.svg';
import removeRoleImg from '../../../../../assets/hud/images/components/Corporations/removeRole.svg';
import CorporationsText from '../../CorporationsText';
import HorizontalLine from '../../HorizontalLine';
import SixCircles from '../../SixCircles';
import { corporationsTheme } from '../../../../../constants/hud/corporations/corporationsTheme';
import LeftVerticalLine from '../../LeftVerticalLine';
import { SingleRoleInterface } from '../../../../../models/hud/corporations/interfaces';
import {
  permissionsRemoveRoleAction,
  permissionsSelectRoleAction,
} from '../../../../../redux/actions/hud/corporations/tabs/permissions/permissions';
import {
  mpTrigger_corporations_permissions_removeRole,
  mpTrigger_corporations_permissions_selectRole,
} from '../../../../../utils/mpTriggers/hud/corporations/tabs/permissions/permissionsTriggers';

interface Props {
  roles: SingleRoleInterface[];
  selectedRole: SingleRoleInterface;
  onSelectRole: (string) => any;
  onRemoveRole: (string) => any;
  roleHeight: number;
}

const RolesListContent: React.FC<Props> = React.memo((props) => {
  const dispatch = useDispatch();

  if (!props.roles) {
    return <div />;
  }

  const selectRoleHandler = (role: SingleRoleInterface) => {
    if (!(props.selectedRole && props.selectedRole.title === role.title)) {
      // check if not selected
      dispatch(permissionsSelectRoleAction(role.title));
      mpTrigger_corporations_permissions_selectRole(role.title);
    }
  };

  const removeRoleHandler = (roleTitle: string) => {
    dispatch(permissionsRemoveRoleAction(roleTitle));
    mpTrigger_corporations_permissions_removeRole(roleTitle);
  };

  const singleRoleStyles: CSSProperties = {
    position: 'relative',
    height: props.roleHeight + 'px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  };

  const roleTitleStyles: CSSProperties = {
    fontSize: '0.8rem',
    lineHeight: '0.9rem',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: corporationsTheme.text_gray,
  };

  // to sort roles by priorities
  const rolesSortingFunc = (role1: SingleRoleInterface, role2: SingleRoleInterface) => {
    return role1.priority > role2.priority ? 1 : role1.priority === role2.priority ? 0 : -1;
  };

  const rolesListJSX: ReactElement[] = props.roles.sort(rolesSortingFunc).map((role) => {
    const isSelectedRole = props.selectedRole && role.title === props.selectedRole.title;
    // to not change global value
    const localRoleStyles: CSSProperties = { ...singleRoleStyles };
    const localTitleStyles: CSSProperties = { ...roleTitleStyles };

    if (isSelectedRole) {
      localRoleStyles.background = corporationsTheme.bg_darkGray_picked;
      localTitleStyles.color = corporationsTheme.text_white;
    }

    const circlesColor = isSelectedRole ? corporationsTheme.text_white : corporationsTheme.text_gray;

    return (
      <div key={role.title} style={{ width: '100%' }} onClick={() => selectRoleHandler(role)}>
        <div style={localRoleStyles} className={classes.SingleRole}>
          {isSelectedRole && <LeftVerticalLine />}
          <div className={classes.CirclesWrapper}>
            <SixCircles color={circlesColor} />
          </div>
          <div className={classes.RoleTitleWrapper}>
            <CorporationsText styles={localTitleStyles}>
              {role.priority.toString() + '. ' + role.title}
            </CorporationsText>
          </div>
          {/*<img className={classes.AddNewRoleImageWrapper} src={newRoleImg}/>*/}
          {isSelectedRole && (
            <img
              className={classes.RemoveRoleImageWrapper}
              src={removeRoleImg}
              onClick={() => removeRoleHandler(role.title)}
            />
          )}
        </div>
        <HorizontalLine />
      </div>
    );
  });

  return <div className={classes.RolesListContent}>{rolesListJSX}</div>;
});

export default RolesListContent;
