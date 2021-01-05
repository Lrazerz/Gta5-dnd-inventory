import React, {CSSProperties} from 'react';
import classes from '../../../styles/hud/components/Corporations/HorizontalLine.module.scss';

interface Props {
  styles?: CSSProperties;
}

const HorizontalLine: React.FC<Props> = React.memo((Props) => {
  return (
    <div style={Props.styles} className={classes.HorizontalLine}/>
  );
});

export default HorizontalLine;