import React, { CSSProperties, useEffect, useState } from 'react';
import classes from '../styles/alert/SingleAlert.module.scss';
import { SingleAlertInterface } from '../models/alert/interfaces';
import { AlertTypesEnum } from '../models/alert/enums';
import AlertsText from './AlertsText';

interface Props {
  alert: SingleAlertInterface;
  isDisappearing?: boolean;
}

const SingleAlert: React.FC<Props> = React.memo((props) => {
  // for opacity and properly animations
  const containerStyles: CSSProperties = {
    opacity: props.isDisappearing ? 0 : 1,
  };

  let alertClassName: {};

  switch (props.alert.type) {
    case AlertTypesEnum.success: {
      alertClassName = classes.Success;
      break;
    }
    case AlertTypesEnum.warning: {
      alertClassName = classes.Warning;
      break;
    }
    case AlertTypesEnum.error: {
      alertClassName = classes.Error;
      break;
    }
  }

  return (
    <div
      style={containerStyles}
      className={`${classes.SingleAlert} ${alertClassName} 
    ${props.isDisappearing ? classes.FadeOut : classes.FadeIn}`}
    >
      <AlertsText>{props.alert.message}</AlertsText>
    </div>
  );
});

export default SingleAlert;
