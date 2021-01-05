import React, {CSSProperties} from 'react';
import classes from '../../../styles/hud/components/Corporations/CorporationsHeaderTab.module.scss';
import {corporationsTheme} from "./consts/corporationsTheme";
import CorporationsText from "./CorporationsText";

interface Props {
  title: string;
  isActive: boolean;
}

const CorporationsHeaderTab: React.FC<Props> = React.memo((Props) => {

  const containerStyles: CSSProperties = {
    borderRadius: Props.isActive ? '1rem' : 'none',
    // backgroundColor: Props.isActive ? `rgba(196, 196, 196, 0.1)` : 'transparent',
    backgroundColor: Props.isActive ? `rgba(196, 196, 196, 0.7)` : 'transparent',
  }

  const titleTextStyles: CSSProperties = {
    fontSize: '0.7647rem',
    lineHeight: '0.9324rem',
    color: Props.isActive ? corporationsTheme.text_white : corporationsTheme.text_gray,
  }

  return (
    <div style={containerStyles} className={classes.CorporationsHeaderTab}>
      <CorporationsText styles={titleTextStyles}>
        {Props.title}
      </CorporationsText>
    </div>
  );
});

export default CorporationsHeaderTab;