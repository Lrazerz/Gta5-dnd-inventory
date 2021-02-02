import React, {CSSProperties} from 'react';
import classes from '../../../../styles/hud/components/Corporations/LogsTab/SingleLog.module.scss';
import {SingleLogInterface} from "../../../models/corporations/tabs/logs/logsInterfaces";
import CorporationsText from "../CorporationsText";

interface Props {
  log: SingleLogInterface;
}

const SingleLog: React.FC<Props> = React.memo((Props) => {

  const executorStyles: CSSProperties = {
    lineHeight: '0.9323rem',
    fontSize: '0.7647rem',
    fontWeight: 700,
    marginLeft: '3.48%',
  }

  const actionStyles: CSSProperties = {
    lineHeight: '0.9323rem',
    fontSize: '0.7647rem',
    fontWeight: 600,
    color: '#767C8E',
    marginLeft: '1.9%',
  }

  const typeStyles: CSSProperties = {
    lineHeight: '0.9323rem',
    fontSize: '0.7647rem',
    fontWeight: 600,
    marginLeft: '0.42%',
  }

  const descriptionStyles: CSSProperties = {
    lineHeight: '0.9323rem',
    fontSize: '0.7647rem',
    fontWeight: 600,
    color: '#FF5D17',
    marginLeft: '0.84%',
  }

  return (
    <div className={classes.SingleLog}>
      <CorporationsText styles={executorStyles}>
        {Props.log.executor}
      </CorporationsText>
      <CorporationsText styles={actionStyles}>
        {Props.log.action}
      </CorporationsText>
      <CorporationsText styles={typeStyles}>
        {Props.log.type}
      </CorporationsText>
      <CorporationsText styles={descriptionStyles}>
        {Props.log.description}
      </CorporationsText>
    </div>
  );
});

export default SingleLog;