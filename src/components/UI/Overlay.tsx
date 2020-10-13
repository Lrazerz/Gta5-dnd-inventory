import React, {CSSProperties} from 'react';
import classes from '../../styles/Overlay.module.scss';

interface Props {
  color: string;
  // handle clip-path
  fromOctagon?: boolean;
}

const Overlay: React.FC<Props> = ({color, fromOctagon = false}) => {

  let styles: CSSProperties = {
    background: color,
  };

  if(fromOctagon) {
    styles = {
      ...styles,
      clipPath: `polygon(0 21.4%, 21.4% 0, 78.6% 0, 100% 21.4%, 100% 78.6%, 78.6% 100%, 21.4% 100%, 0 78.6%)`,
    }
  }

  return (
    <div style={styles} className={classes.Overlay}/>
  );
};

export default Overlay;