import React, { CSSProperties } from 'react';
import classes from '../../../styles/hud/components/Corporations/CorporationsHeaderTab.module.scss';
import { corporationsTheme } from '../../../constants/hud/corporations/corporationsTheme';
import CorporationsText from './CorporationsText';

interface Props {
  title: string;
  isActive: boolean;
  onClick: any;
}

const CorporationsHeaderTab: React.FC<Props> = React.memo((props) => {
  const containerStyles: CSSProperties = {
    borderRadius: '1rem',
    // backgroundColor: props.isActive ? `rgba(196, 196, 196, 0.7)` : 'transparent',
  };

  if (props.isActive) {
    containerStyles.backgroundColor = `rgba(196, 196, 196, 0.7)`;
  }

  const titleTextStyles: CSSProperties = {
    fontSize: '0.7647rem',
    lineHeight: '0.9324rem',
    color: props.isActive ? corporationsTheme.text_white : corporationsTheme.text_gray,
    whiteSpace: 'nowrap',
  };

  return (
    <div style={containerStyles} className={classes.CorporationsHeaderTab} onClick={props.onClick}>
      <CorporationsText styles={titleTextStyles}>{props.title}</CorporationsText>
    </div>
  );
});

export default CorporationsHeaderTab;
