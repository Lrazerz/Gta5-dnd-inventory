import React, { CSSProperties } from 'react';
import classes from '../../../../styles/hud/components/Corporations/LogsTab/SingleLog.module.scss';
import { SingleLogInterface } from '../../../../models/hud/corporations/tabs/logs/logsInterfaces';
import CorporationsText from '../CorporationsText';

interface Props {
  log: SingleLogInterface;
}

const SingleLog: React.FC<Props> = React.memo((props) => {
  const dateTextStyles: CSSProperties = {
    lineHeight: '0.9323rem',
    fontSize: '0.7647rem',
    fontWeight: 600,
    color: '#7A8192',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    lineClamp: 2,
  };

  const executorStyles: CSSProperties = {
    lineHeight: '0.9323rem',
    fontSize: '0.7647rem',
    fontWeight: 700,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    lineClamp: 2,
  };

  const actionStyles: CSSProperties = {
    lineHeight: '0.9323rem',
    fontSize: '0.7647rem',
    fontWeight: 600,
    color: '#767C8E',
    marginLeft: '1.9%',
    width: '7%',
    maxWidth: '7%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    lineClamp: 2,
  };

  const typeStyles: CSSProperties = {
    lineHeight: '0.9323rem',
    fontSize: '0.7647rem',
    fontWeight: 600,
    marginLeft: '0.42%',
    width: '9.64%',
    maxWidth: '9.64%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    lineClamp: 2,
  };

  const descriptionStyles: CSSProperties = {
    lineHeight: '0.9323rem',
    fontSize: '0.7647rem',
    fontWeight: 600,
    color: '#FF5D17',
    marginLeft: '0.84%',
    width: '20%',
    maxWidth: '20%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    lineClamp: 2,
  };

  return (
    <div className={classes.SingleLog}>
      <div className={classes.DateWrapper}>
        <CorporationsText styles={dateTextStyles}>
          {props.log.date.day + '.' + props.log.date.month + '.' + props.log.date.year}
        </CorporationsText>
        <CorporationsText styles={dateTextStyles}>
          {props.log.date.hours + ':' + props.log.date.minutes}
        </CorporationsText>
      </div>
      <CorporationsText styles={executorStyles}>{props.log.executor}</CorporationsText>
      <CorporationsText styles={actionStyles}>{props.log.action}</CorporationsText>
      <CorporationsText styles={typeStyles}>{props.log.type}</CorporationsText>
      <CorporationsText styles={descriptionStyles}>{props.log.description}</CorporationsText>
    </div>
  );
});

export default SingleLog;
