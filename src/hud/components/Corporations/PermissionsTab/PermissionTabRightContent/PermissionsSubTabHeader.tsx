import React, { CSSProperties, ReactElement } from 'react';
import classes from '../../../../../styles/hud/components/Corporations/PermissionsTab/PermissionTabRightContent/PermissionsSubTabHeader.module.scss';
import CorporationsText from '../../CorporationsText';
import { corporationsTheme } from '../../../../../constants/hud/corporations/corporationsTheme';

interface Props {
  title: string;
  imageUrl: ReactElement;
  isActive: boolean;
}

const PermissionsSubTabHeader: React.FC<Props> = React.memo((props) => {
  const containerStyles: CSSProperties = {
    opacity: props.isActive ? 0.95 : 1,
  };

  if (props.isActive) {
    containerStyles.backgroundColor = corporationsTheme.bg_darkGrey2;
  }

  const titleTextStyles: CSSProperties = {
    whiteSpace: 'nowrap',
    fontSize: '0.7647rem',
    lineHeight: '0.9324rem',
    color: props.isActive ? corporationsTheme.text_white : corporationsTheme.text_gray,
  };

  return (
    <div style={containerStyles} className={classes.PermissionsSubTab}>
      <div className={classes.Content}>
        <div className={classes.ImageWrapper}>{props.imageUrl}</div>
        <div className={classes.TitleTextWrapper}>
          <CorporationsText styles={titleTextStyles}>{props.title}</CorporationsText>
        </div>
      </div>
    </div>
  );
});

export default PermissionsSubTabHeader;
