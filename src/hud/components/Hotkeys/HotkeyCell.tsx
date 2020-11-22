import React from 'react';
import classes from '../../styles/components/Hotkeys/HotkeyCell.module.scss';
import hotkeyBorderImg from '../../../assets/hud/images/components/Hotkeys/hotkey-border.svg';

const HotkeyCell = React.memo(() => {
  return (
    <div className={classes.HotkeyCell}>
      <img src={hotkeyBorderImg} className={classes.BorderElement}>

      </img>
    </div>
  );
});

export default HotkeyCell;