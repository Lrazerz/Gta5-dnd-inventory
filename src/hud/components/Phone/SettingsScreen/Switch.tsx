import React, {useRef, useEffect, CSSProperties} from 'react';
import classes from '../../../../styles/hud/components/Phone/SettingsScreen/Switch.module.scss';
import enabledSwitchImg from '../../../../assets/hud/images/components/Phone/components/SettingsList/switch-wrapper.svg';
import disabledSwitchImg from '../../../../assets/hud/images/components/Phone/components/SettingsList/switch-wrapper-inactive.svg';
import phoneTheme from "../consts/phoneTheme";

interface Props {
  value: boolean;
  onChange: () => void;
}

// onChange
const Switch: React.FC<Props> = React.memo(({value, onChange}) => {

  const switchRef = useRef();

  useEffect(() => {
    if(switchRef.current) {
      const widthWithPx: string = window.getComputedStyle(switchRef.current).width;
      const width: number = +widthWithPx.match(/(\.|\d)+/)[0]
      const newHeight: number = width * 0.49;

      // @ts-ignore
      switchRef.current.style.height = newHeight + 'px';
    }
  }, [switchRef.current]);

  const switchStyles: CSSProperties = {
    borderColor: phoneTheme.lightPurple,
  }

  const indicatorStyles: CSSProperties = {
    transform: value ? 'translateX(210%)' : 'none',
    backgroundColor: value ? phoneTheme.lightPurple : 'rgb(150,149,149)',
  }

  return (
    <label style={switchStyles} className={classes.Switch} ref={switchRef}>
      <input type="checkbox" checked={false} onChange={onChange}
      style={{width: 0, height: 0, opacity: 0}}/>
      <div style={indicatorStyles} className={classes.Indicator}/>
    </label>
  );
});

export default Switch;