import React, { CSSProperties } from 'react';
import classes from '../../../../../../../styles/hud/components/Corporations/PermissionsTab/PermissionTabRightContent/subTabs/SubTabAuto/ModelsListItem.module.scss';
import CorporationsText from '../../../../CorporationsText';
import LeftVerticalLine from '../../../../LeftVerticalLine';
import { corporationsTheme } from '../../../../../../../constants/hud/corporations/corporationsTheme';

interface Props {
  title: string;
  isActive: boolean;
  padding?: string;
}

const ModelsListItem: React.FC<Props> = React.memo((props) => {
  const containerStyles: CSSProperties = {
    // backgroundColor: props.isActive ? '#2C313A' : 'transparent'
    padding: props.padding || '12.25%',
  };

  if (props.isActive) {
    containerStyles.backgroundColor = '#2C313A';
  }

  const titleTextStyles: CSSProperties = {
    fontSize: '0.7647rem',
    lineHeight: '0.9324rem',
    color: props.isActive ? corporationsTheme.text_white : corporationsTheme.text_gray,
  };

  return (
    <div style={containerStyles} className={classes.ModelsListItem}>
      {props.isActive && <LeftVerticalLine />}
      <CorporationsText styles={titleTextStyles}>{props.title}</CorporationsText>
    </div>
  );
});

export default ModelsListItem;
