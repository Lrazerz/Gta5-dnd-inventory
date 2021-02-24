import React, { CSSProperties, useState } from 'react';
import classes from '../../../../../styles/hud/components/Corporations/StaffTab/StaffTab/StaffTabOptionsDropdown.module.scss';
import CorporationsText from '../../CorporationsText';
import HorizontalLine from '../../HorizontalLine';
import OptionsDropdownList from './OptionsDropdownList';

interface Props {
  roles: string[];
  onKickPlayer: () => void;
  onSelectRole: (role: string) => void;
}

const StaffTabOptionsDropdown: React.FC<Props> = React.memo((props) => {
  const [isKickTextHovered, setIsKickTextHovered] = useState(false);
  const [isRolesTextHovered, setIsRolesTextHovered] = useState(false);

  const [isRoles, setIsRolesOpened] = useState(false);

  const commonTextStyles: CSSProperties = {
    // #FF4848
    fontSize: '0.7059rem',
    lineHeight: '0.8606rem',
    fontWeight: 600,
  };

  const selectRoleHandler = (role: string) => {
    props.onSelectRole(role);
  };

  const optionsDropdownOpenHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsRolesOpened((prev) => !prev);
  };

  const kickTextHoverHandler = () => {
    setIsKickTextHovered(true);
  };

  const kickMouseLeaveHandler = () => {
    setIsKickTextHovered(false);
  };

  const roleTextHoverHandler = () => {
    setIsRolesTextHovered(true);
  };

  const roleTextMouseLeaveHandler = () => {
    setIsRolesTextHovered(false);
  };

  const kickTextStyles: CSSProperties = {
    ...commonTextStyles,
    color: isKickTextHovered ? '#d44747' : '#FF4848',
  };

  const horizontalLineStyles: CSSProperties = {
    marginTop: '0.5294rem',
    backgroundColor: '#4F5462',
    width: '7.4706rem',
  };

  const rolesTextStyles: CSSProperties = {
    ...commonTextStyles,
    color: isRolesTextHovered ? '#9da1ad' : '#B7BCCB',
    display: 'inline',
  };

  return (
    <div className={classes.StaffTabOptionsDropdown}>
      <div
        onClick={props.onKickPlayer}
        className={classes.KickPlayerWrapper}
        onMouseOver={kickTextHoverHandler}
        onMouseLeave={kickMouseLeaveHandler}
      >
        <CorporationsText styles={kickTextStyles}>Кикнуть</CorporationsText>
      </div>
      <HorizontalLine styles={horizontalLineStyles} />
      <div
        className={classes.RoleTitle}
        onClick={optionsDropdownOpenHandler}
        onMouseOver={roleTextHoverHandler}
        onMouseLeave={roleTextMouseLeaveHandler}
      >
        <CorporationsText styles={rolesTextStyles}>Роли</CorporationsText>
        <div className={classes.RightArrow} />
      </div>
      {isRoles && (
        <div className={classes.OptionsDropdownWrapper}>
          <OptionsDropdownList roles={props.roles} onSelect={selectRoleHandler} />
        </div>
      )}
    </div>
  );
});

export default StaffTabOptionsDropdown;
