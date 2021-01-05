import React, {CSSProperties, ReactElement} from 'react';
import classes
  from '../../../../../../../styles/hud/components/Corporations/PermissionsTab/PermissionTabRightContent/subTabs/SubTabAuto/ModelInfoRow.module.scss';
import CorporationsText from "../../../../CorporationsText";

interface Props {
  title: string;
  rightElement: JSX.Element;
}

const ModelInfoRow: React.FC<Props> = React.memo((Props) => {

  const titleTextStyles: CSSProperties = {
    fontSize: '0.7647rem',
    lineHeight: '0.9412rem'
  }

  return (
    <div className={classes.ModelInfoRow}>
      <CorporationsText styles={titleTextStyles}>
        {Props.title}
      </CorporationsText>
      {Props.rightElement}
    </div>
  );
});

export default ModelInfoRow;