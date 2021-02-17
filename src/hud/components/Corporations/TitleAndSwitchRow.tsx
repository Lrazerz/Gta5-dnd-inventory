import React, { CSSProperties } from 'react';
import classes from '../../../styles/hud/components/Corporations/TitleAndSwitchRow.module.scss';
import CorporationsSwitch from './CorporationsSwitch';
import CorporationsText from './CorporationsText';
import { corporationsTheme } from '../../../constants/hud/corporations/corporationsTheme';

interface Props {
  title: string;
  value: boolean;
  onChange: any;
}

const TitleAndSwitchRow: React.FC<Props> = React.memo((props) => {
  const titleTextStyles: CSSProperties = {
    color: corporationsTheme.text_white2,
    fontSize: '0.7rem',
    lineHeight: '0.86rem',
  };

  return (
    <div className={classes.TitleAndSwitchRow}>
      <div className={classes.TitleWrapper}>
        <CorporationsText styles={titleTextStyles}>{props.title}</CorporationsText>
      </div>
      <div className={classes.SwitchWrapper}>
        <CorporationsSwitch value={props.value} onChange={props.onChange} />
      </div>
    </div>
  );
});

export default TitleAndSwitchRow;
