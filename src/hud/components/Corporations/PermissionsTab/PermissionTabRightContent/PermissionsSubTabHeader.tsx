import React, {CSSProperties, ReactElement} from 'react';
import classes
  from '../../../../../styles/hud/components/Corporations/PermissionsTab/PermissionTabRightContent/PermissionsSubTabHeader.module.scss';
import CorporationsText from "../../CorporationsText";
import {corporationsTheme} from "../../consts/corporationsTheme";

interface Props {
  title: string;
  imageUrl: ReactElement;
  isActive: boolean;
}

const PermissionsSubTabHeader: React.FC<Props> = React.memo((Props) => {

  const containerStyles: CSSProperties = {
    opacity: Props.isActive ? 0.95 : 1,
  }

  if(Props.isActive) {
    containerStyles.backgroundColor = corporationsTheme.bg_darkGrey2;
  }

  const titleTextStyles: CSSProperties = {
    whiteSpace: 'nowrap',
    fontSize: '0.7647rem',
    lineHeight: '0.9324rem',
    color: Props.isActive ? corporationsTheme.text_white : corporationsTheme.text_gray,
  }

  return (
    <div style={containerStyles} className={classes.PermissionsSubTab}>
      <div className={classes.Content}>
        <div className={classes.ImageWrapper}>
          {Props.imageUrl}
        </div>
        <div className={classes.TitleTextWrapper}>
          <CorporationsText styles={titleTextStyles}>
            {Props.title}
          </CorporationsText>
        </div>
      </div>
    </div>
  );
});

export default PermissionsSubTabHeader;