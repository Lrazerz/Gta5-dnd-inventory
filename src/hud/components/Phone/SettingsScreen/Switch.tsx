import React from 'react';
import classes from '../../../styles/components/Phone/SettingsScreen/Switch.module.scss';

import enabledSwitchImg from '../../../../assets/hud/images/components/Phone/components/SettingsList/switch-wrapper.svg';
import disabledSwitchImg from '../../../../assets/hud/images/components/Phone/components/SettingsList/switch-wrapper-inactive.svg';

interface Props {
  value: boolean;
  onChange: () => void;
}

// onChange
const Switch: React.FC<Props> = React.memo(({value, onChange}) => {

  const switchStyles = {
    background: `no-repeat url("${value ? enabledSwitchImg : disabledSwitchImg}")`,
  }

  return (
    <div className={classes.Switch} onClick={onChange} style={switchStyles}>
      {/*<div className={classes.Indicator}>*/}

      {/*</div>*/}
    </div>
  );
});

export default Switch;