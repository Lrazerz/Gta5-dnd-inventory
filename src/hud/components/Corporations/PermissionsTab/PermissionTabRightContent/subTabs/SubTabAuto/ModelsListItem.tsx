import React, {CSSProperties} from 'react';
import classes
  from '../../../../../../../styles/hud/components/Corporations/PermissionsTab/PermissionTabRightContent/subTabs/SubTabAuto/ModelsListItem.module.scss';
import CorporationsText from "../../../../CorporationsText";
import LeftVerticalLine from "../../../../LeftVerticalLine";
import {corporationsTheme} from "../../../../consts/corporationsTheme";

interface Props {
  title: string;
  isActive: boolean;
  padding?: string;
}

const ModelsListItem: React.FC<Props> = React.memo((Props) => {

  const containerStyles: CSSProperties = {
    // backgroundColor: Props.isActive ? '#2C313A' : 'transparent'
    padding: Props.padding || '12.25%',
  }

  if(Props.isActive) {
    containerStyles.backgroundColor = '#2C313A';
  }

  const titleTextStyles: CSSProperties = {
    fontSize: '0.7647rem',
    lineHeight: '0.9324rem',
    color: Props.isActive ? corporationsTheme.text_white : corporationsTheme.text_gray,
  }

  return (
    <div style={containerStyles} className={classes.ModelsListItem}>
      {Props.isActive && <LeftVerticalLine/>}
      <CorporationsText styles={titleTextStyles}>
        {Props.title}
      </CorporationsText>
    </div>
  );
});

export default ModelsListItem;