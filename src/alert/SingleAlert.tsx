import React, {CSSProperties, useEffect, useState} from 'react';
import classes from '../styles/alert/SingleAlert.module.scss';
import {SingleAlertInterface} from "../models/alert/interfaces";
import {AlertTypesEnum} from "../models/alert/enums";
import AlertsText from "./AlertsText";

interface Props {
  alert: SingleAlertInterface;
  isDisappearing?: boolean;
}

const SingleAlert: React.FC<Props> = React.memo((Props) => {

  // console.log('SingleAlert', Props.alert.id, Props.isDisappearing)

  const hideContainerHandler = () => {
    // setIsContainerVisible(prevState => !prevState);
  }

  // for opacity and properly animations
  const containerStyles: CSSProperties = {
    opacity: Props.isDisappearing ? 0 : 1,
  }

  let alertClassName: {};

  switch(Props.alert.type) {
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
    <div style={containerStyles} className={`${classes.SingleAlert} ${alertClassName} 
    ${Props.isDisappearing ? classes.FadeOut : classes.FadeIn}`}
         onClick={hideContainerHandler}>
      <AlertsText>
        {Props.alert.message}
      </AlertsText>
    </div>
  );
});

export default SingleAlert;