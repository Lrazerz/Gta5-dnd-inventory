import React from 'react';
import classes from '../../../../../styles/hud/components/Corporations/StaffTab/StaffTab/StaffTabOptionsDropdown.module.scss';

interface Props {
  roles: string[];
  onKickPlayer: () => void;
  onSelectRole: (role: string) => void;
}

const StaffTabOptionsDropdown: React.FC<Props> = React.memo(() => {
  console.log('dropdown');
  return <div className={classes.StaffTabOptionsDropdown}></div>;
});

export default StaffTabOptionsDropdown;
