import React, { CSSProperties } from 'react';
import classes from '../../../../../styles/hud/components/Corporations/PermissionsTab/RolesList/RolesListHeader.module.scss';
import CorporationsButton from '../../CorporationsButton';
import CorporationsText from '../../CorporationsText';
import newRoleImg from '../../../../../assets/hud/images/components/Corporations/newRole.svg';

interface Props {}

const RolesListHeader: React.FC<Props> = React.memo(() => {
  const titleTextStyles: CSSProperties = {
    fontWeight: 800,
    fontSize: '1.28rem',
    lineHeight: '1.6rem',
  };

  return (
    <div className={classes.RolesListHeader}>
      <div className={classes.HeaderTitleWrapper}>
        <CorporationsText styles={titleTextStyles}>Роли</CorporationsText>
      </div>
      <div className={classes.AddNewRoleButtonWrapper}>
        <CorporationsButton onClick={() => {}} title={'Новая роль'} imageUrl={newRoleImg} />
      </div>
    </div>
  );
});

export default RolesListHeader;
