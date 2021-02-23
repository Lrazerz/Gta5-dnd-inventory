import React, { CSSProperties } from 'react';
import classes from '../../../../../styles/hud/components/Corporations/StaffTab/StaffTab/StaffListItemDescription.module.scss';
import CorporationsText from '../../CorporationsText';

interface KeyAndValue {
  key: string;
  value: number;
}

interface Props {
  staffWorkerInfo: KeyAndValue[];
}

// todo display boost status
const StaffListItemDescription: React.FC<Props> = React.memo((props) => {
  const keyTextStyles: CSSProperties = {
    marginTop: '0.2353rem',
    fontWeight: 600,
    fontSize: '0.7058rem',
    lineHeight: '0.8605rem',
    color: '#737F93',
  };

  const valueTextStyles: CSSProperties = {
    fontWeight: 600,
    color: '#fff',
  };

  const keyValueBlock: JSX.Element[] = props.staffWorkerInfo.map((keyValuePair) => {
    return (
      <CorporationsText styles={keyTextStyles} key={keyValuePair.key}>
        <span>{keyValuePair.key + ': '}</span>
        <span style={valueTextStyles}>{keyValuePair.value}</span>
      </CorporationsText>
    );
  });

  return (
    <div className={classes.StaffListItemDescription}>
      <div className={classes.StatsWrapper}>{keyValueBlock}</div>
    </div>
  );
});

export default StaffListItemDescription;
