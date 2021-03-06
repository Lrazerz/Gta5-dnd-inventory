import React, { CSSProperties, ReactElement } from 'react';
import classes from '../../../../../../../styles/hud/components/Corporations/PermissionsTab/PermissionTabRightContent/subTabs/common/CorporationsPermissionsRow.module.scss';

// import classes
//   from '../../../../../../../styles/hud/components/Corporations/PermissionsTab/' +
//   'PermissionTabRightContent/subTabs/common/CorporationsPermissionsRow.module.scss';
import CorporationsText from '../../../../CorporationsText';

interface Props {
  title: string;
  rightElement: JSX.Element;
}

const CorporationsPermissionsRow: React.FC<Props> = React.memo((props) => {
  const titleTextStyles: CSSProperties = {
    fontSize: '0.7647rem',
    lineHeight: '0.9412rem',
  };

  return (
    <div className={classes.CorporationsPermissionsRow}>
      <CorporationsText styles={titleTextStyles}>{props.title}</CorporationsText>
      {props.rightElement}
    </div>
  );
});

export default CorporationsPermissionsRow;
