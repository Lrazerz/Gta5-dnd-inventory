import React from 'react';
import {useSelector} from "react-redux";
import classes from './Alert.module.css';

const Alert = () => {
  const alerts = useSelector(({alert}) => alert);

  const returnContent = alerts.length > 0 && alerts.map((alert,idx) => (
    <div key={alert.id} className={`${classes.Alert} ${classes['alert-'+alert.alertType]}`}
         style={{left: `${(window.innerWidth/2-150).toString()}px`, top: `${idx*100+60}px`}}>
      {alert.msg}
    </div>
  ))


  return returnContent;
}

export default Alert;