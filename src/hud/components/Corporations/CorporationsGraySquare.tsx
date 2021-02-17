import React, { CSSProperties, useEffect, useRef } from 'react';
import classes from '../../../styles/hud/components/Corporations/CorporationsGraySquare.module.scss';
import CorporationsText from './CorporationsText';
import { corporationsTheme } from '../../../constants/hud/corporations/corporationsTheme';

interface Props {
  styles?: CSSProperties;
  textStyles?: CSSProperties;
  title: string;
}

const CorporationsGraySquare: React.FC<Props> = React.memo((props) => {
  const textStyles: CSSProperties = {
    fontSize: '0.7058rem',
    lineHeight: '0.8824rem',
    color: corporationsTheme.bg_orange_picked2,
  };

  return (
    <div style={props.styles} className={classes.CorporationsGraySquare}>
      <CorporationsText styles={{ ...textStyles, ...props.textStyles }}>{props.title}</CorporationsText>
    </div>
  );
});

export default CorporationsGraySquare;
