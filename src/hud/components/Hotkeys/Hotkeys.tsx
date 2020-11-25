import React from 'react';
import classes from '../../../styles/hud/components/Hotkeys/Hotkeys.module.scss'
import HotkeyCell from "./HotkeyCell";

const Hotkeys = React.memo(() => {

  return (
    <div className={classes.Hotkeys}>
      <div className={classes.HotkeyCellWrapper}>
        <HotkeyCell/>
      </div>
      <div className={classes.HotkeyCellWrapper}>
        <HotkeyCell/>
      </div>
      <div className={classes.HotkeyCellWrapper}>
        <HotkeyCell/>
      </div>
      <div className={classes.HotkeyCellWrapper}>
        <HotkeyCell/>
      </div>
      <div className={classes.HotkeyCellWrapper}>
        <HotkeyCell/>
      </div>
    </div>
  );
});

export default Hotkeys;