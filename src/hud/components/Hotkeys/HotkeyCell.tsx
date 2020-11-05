import React from 'react';
import classes from '../../styles/components/Hotkeys/HotkeyCell.module.scss';
import hotkeyBorderImg from '../../assets/images/components/Hotkeys/hotkey-border.svg';

const HotkeyCell = () => {
  return (
    <div className={classes.HotkeyCell}>
      <img src={hotkeyBorderImg} className={classes.BorderElement}>

      </img>
    </div>
  );
};

export default HotkeyCell;