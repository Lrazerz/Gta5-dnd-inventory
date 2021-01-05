import React, {CSSProperties, useEffect, useRef, useState} from 'react';
import classes from '../../../styles/hud/components/Corporations/CorporationsSwitch.module.scss';
import {corporationsTheme} from "./consts/corporationsTheme";

interface Props {
  value: boolean;
  onChange: () => any;
}

const CorporationsSwitch: React.FC<Props> = React.memo((Props) => {
  // height proportional to width

  const containerRef = useRef();
  const [height, setHeight]: [number, any] = useState();

  useEffect(() => {
    if(containerRef.current) {
      const width: string = window.getComputedStyle(containerRef.current).width;
      const widthNumber: number = +width.match(/(\d|\.)+/)[0];
      setHeight(widthNumber * 0.4857);
    }
  }, [containerRef.current]);

  console.log('switch container height', height)
  const indicatorStyles: CSSProperties = {
    transform: Props.value ? 'translateX(105.9%)' : 'none',
    backgroundColor: Props.value ? corporationsTheme.bg_green : corporationsTheme.bg_lightGray,
  }
  return (
    <label style={{height: height}} ref={containerRef} className={classes.CorporationsSwitch}>
      <input type="checkbox" className={classes.Input}
             checked={Props.value} onChange={Props.onChange}/>
     <div style={indicatorStyles} className={classes.Indicator} />
    </label>
  );
});

export default CorporationsSwitch;