import React, { CSSProperties } from 'react';
import classes from '../../../../../styles/hud/components/Corporations/PermissionsTab/CommonPermissionsList/CommonPermissionsHeader.module.scss';
import CorporationsText from '../../CorporationsText';

const CommonPermissionsHeader = React.memo(() => {
  const titleTextStyles: CSSProperties = {
    fontSize: '1.3rem',
    lineHeight: '1.59rem',
    fontWeight: 800,
  };

  return (
    <div className={classes.CommonPermissionsHeader}>
      <div className={classes.TitleWrapper}>
        <CorporationsText styles={titleTextStyles}>Разрешения</CorporationsText>
      </div>
    </div>
  );
});

export default CommonPermissionsHeader;
