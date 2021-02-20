import React, { CSSProperties } from 'react';
import classes from '../../../../../styles/hud/components/Corporations/StaffTab/StaffTab/StaffTabListItem.module.scss';
import { SingleStaffWorkerInterface } from '../../../../../models/hud/corporations/tabs/staff/tabs/staffInterfaces';
import CorporationsText from '../../CorporationsText';
import CorporationsButton from '../../CorporationsButton';
import newRoleImg from '../../../../../assets/hud/images/components/Corporations/newRole.svg';

interface Props {
  staffWorker: SingleStaffWorkerInterface;
}

const StaffTabListItemStateless: React.FC<Props> = (props) => {
  const newRoleClickHandler = () => {
    console.log('todo');
  };

  const nicknameTextStyles: CSSProperties = {
    marginLeft: '2.85%',
    fontSize: '0.7647rem',
    lineHeight: '0.9324rem',
    fontWeight: 700,
  };

  const addRoleButtonStyles: CSSProperties = {
    padding: '0 13.42%',
  };

  return (
    <div className={classes.StaffTabListItem}>
      <CorporationsText styles={nicknameTextStyles}>{props.staffWorker.nickname}</CorporationsText>
      <div className={classes.AddNewRoleButtonWrapper}>
        <CorporationsButton
          onClick={newRoleClickHandler}
          title={'Новая роль'}
          imageUrl={newRoleImg}
          styles={addRoleButtonStyles}
          imageWidth={'13.42%'}
        />
      </div>
    </div>
  );
};

export default StaffTabListItemStateless;
