import React, {CSSProperties, ReactElement} from 'react';
import classes
  from '../../../../../styles/hud/components/Corporations/PermissionsTab/RolesList/RolesListContent.module.scss';
import circlesImg from '../../../../../assets/hud/images/components/Corporations/PermissionsTab/circles.svg';
import newRoleImg from '../../../../../assets/hud/images/components/Corporations/newRole.svg';
import removeRoleImg from '../../../../../assets/hud/images/components/Corporations/removeRole.svg';
import CorporationsText from "../../CorporationsText";
import HorizontalLine from "../../HorizontalLine";
import SixCircles from "../../SixCircles";
import {corporationsTheme} from "../../consts/corporationsTheme";
import LeftVerticalLine from "../../LeftVerticalLine";

interface Props {
  roles: string[];
  selectedRole: string;
  onSelectRole: (string) => any;
  onRemoveRole: (string) => any;
  roleHeight: number;
}

const RolesListContent: React.FC<Props> = React.memo((Props) => {

  const singleRoleStyles: CSSProperties = {
    position: 'relative',
    height: Props.roleHeight + 'px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }

  const roleTitleStyles: CSSProperties = {
    fontSize: '0.8rem',
    lineHeight: '0.9rem',
    whiteSpace: 'nowrap',
    color: corporationsTheme.text_gray,
  }

  const rolesListJSX: ReactElement[] = Props.roles.map(role => {
    const isSelectedRole = role === Props.selectedRole;
    // to not change global value
    const localRoleStyles: CSSProperties = {...singleRoleStyles};
    const localTitleStyles: CSSProperties = {...roleTitleStyles};

    if(isSelectedRole) {
      localRoleStyles.background = corporationsTheme.bg_darkGray_picked;
      localTitleStyles.color = corporationsTheme.text_white;
    }

    const circlesColor = isSelectedRole ? corporationsTheme.text_white : corporationsTheme.text_gray;

    return (
    <div key={role} style={{width: '100%'}}>
      <div style={localRoleStyles} className={classes.SingleRole}>
        {isSelectedRole ? <LeftVerticalLine/> : null}
        <div className={classes.CirclesWrapper} >
          <SixCircles color={circlesColor}/>
        </div>
        <div className={classes.RoleTitleWrapper}>
          <CorporationsText styles={localTitleStyles}>
            {role}
          </CorporationsText>
        </div>
        {/*<img className={classes.AddNewRoleImageWrapper} src={newRoleImg}/>*/}
        <img className={classes.RemoveRoleImageWrapper} src={removeRoleImg}/>
      </div>
      <HorizontalLine/>
    </div>)
  });

  return (
    <div className={classes.RolesListContent}>
      {rolesListJSX}
    </div>
  );
});

export default RolesListContent;