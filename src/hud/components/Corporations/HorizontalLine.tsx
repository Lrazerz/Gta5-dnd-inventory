import React, { CSSProperties } from 'react';
import classes from '../../../styles/hud/components/Corporations/HorizontalLine.module.scss';

interface Props {
  styles?: CSSProperties;
}

const HorizontalLine: React.FC<Props> = React.memo((props) => {
  return <div style={props.styles} className={classes.HorizontalLine} />;
});

export default HorizontalLine;
