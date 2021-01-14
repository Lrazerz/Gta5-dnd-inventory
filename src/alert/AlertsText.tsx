import React, {CSSProperties} from 'react';
import classes from '../styles/alert/AlertsText.module.scss';

interface Props {
  styles?: CSSProperties;
  children: string;
}

const AlertsText: React.FC<Props> = React.memo((Props) => {
  return (
    <div className={classes.AlertsText}>
      {Props.children}
    </div>
  );
});

export default AlertsText;