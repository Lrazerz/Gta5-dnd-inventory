import React, { CSSProperties } from 'react';
import classes from '../../../../styles/hud/components/Corporations/TreasuryTab/TreasuryButton.module.scss';
import CorporationsText from '../CorporationsText';
import { corporationsTheme } from '../../../../constants/hud/corporations/corporationsTheme';

interface Props {
  children: string;
  onClick: any;
  color?: string;
}

const TreasuryButton: React.FC<Props> = React.memo((props) => {
  const containerStyles: CSSProperties = {
    backgroundColor: props.color || corporationsTheme.button_lightBlue,
  };

  const textStyles: CSSProperties = {
    lineHeight: '0.9324rem',
    fontSize: '0.7847rem',
    fontWeight: 700,
  };

  return (
    <div style={containerStyles} className={classes.TreasuryButton} onClick={props.onClick}>
      <CorporationsText styles={textStyles}>{props.children}</CorporationsText>
    </div>
  );
});

export default TreasuryButton;
