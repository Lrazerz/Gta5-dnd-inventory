import React, {CSSProperties} from 'react';
// @ts-ignore
import classes from '../../styles/Overlay.module.scss';

interface Props {
  color: string;
  // handle clip-path
  fromOctagon?: boolean;
  fromWeapon?: boolean;
}

const Overlay: React.FC<Props> = ({color, fromOctagon = false, fromWeapon = false}) => {

  let styles: CSSProperties = {
    background: color,
  }

  if(fromOctagon) {
    styles = {
      ...styles,
      // here, coz we don't wanna to create separate stacking context at the transparent element
      clipPath: `polygon(0 21.4%, 21.4% 0, 78.6% 0, 100% 21.4%, 100% 78.6%, 78.6% 100%, 21.4% 100%, 0 78.6%)`,
    }
  } else if (fromWeapon) {
    styles = {
      ...styles,
      clipPath: `polygon(0% 10.56792%, 77.45% 10.56792%, 81.0447% 0%, 100% 0%,
      100% 100%, 81.0447% 100%, 77.45% 89.43208%, 0% 89.43208%)`,
    }
  }

  return (
    <div style={styles} className={classes.Overlay}/>
  );
};

export default Overlay;