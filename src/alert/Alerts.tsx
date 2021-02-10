import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import classes from '../styles/alert/Alerts.module.scss';
import {SingleAlertInterface} from "../models/alert/interfaces";
import SingleAlert from "./SingleAlert";

interface AlertWithDisappearingInterface {
  alert: SingleAlertInterface;
  isDisappearing: boolean;
}

interface Props {
}

const Alerts: React.FC<Props> = React.memo(() => {

  const alerts: SingleAlertInterface[] = useSelector(({alert}) => alert.alerts);

  const [alertsWithDisappearing, setAlertsWithDisappearing]: [AlertWithDisappearingInterface[], any] = useState([]);

  useEffect(() => {
    const timeOuts = [];
    // max length of list with dissap - 3, max length of the new list - 3
    if(alerts) {
      if(alertsWithDisappearing.length === 0 || alerts.length === 3) {
        // just copy elements
        const transformedAlerts: AlertWithDisappearingInterface[] = alerts.map(alert => ({
          alert,
          isDisappearing: false
        }))
        setAlertsWithDisappearing(transformedAlerts);
      }
      else {
        // can be withDis=3, al=2, withDis=2, al=2, withDis=1, al=1
        // length is not 0
        // найти элементы, которые пропали
        let disappearedElements: AlertWithDisappearingInterface[] = [];
        for(let i = 0; i < alertsWithDisappearing.length; i++) {
          if(alertsWithDisappearing[i].isDisappearing) {
            continue;
          }
          const newAlertsIdx = alerts.findIndex(alert => alert.id === alertsWithDisappearing[i].alert.id);
          if(newAlertsIdx === -1) {
            timeOuts.push(setTimeout(() => {
              removeAlertWithDisappearing(alertsWithDisappearing[i].alert.id);
            }, 2000));

            // element disappeared
            disappearedElements.push({...alertsWithDisappearing[i], isDisappearing: true});
          }
        }

        // порядок al от новейших к старешйшим, порядок существующих такой же
        // тоесть сначала добавляем новые, потом существующие и берем первые 3
        const transformedNewAlerts: AlertWithDisappearingInterface[] = alerts.map(alert => ({
          alert,
          isDisappearing: false
        }));
        const resultAlerts = [...transformedNewAlerts, ...disappearedElements].slice(0,3);
        // * элементы в редаксе будут добавляться в начало, чтобы не инвертировать при отображении (первый - сверху)
        setAlertsWithDisappearing(resultAlerts);
      }
    }
    return () => {
      timeOuts.forEach(timeOut => {
        clearTimeout(timeOut);
      })
    }
  }, [alerts]);

  // disappear animation
  const removeAlertWithDisappearing = (id) => {
    setAlertsWithDisappearing(prevAlerts => prevAlerts.filter(alert => alert.alert.id !== id));
  }

  const alertsBlock: JSX.Element[] = alertsWithDisappearing.length > 0 && alertsWithDisappearing.map(alertWithDisappearing => {

    return (
      <div className={classes.SingleAlertWrapper} key={alertWithDisappearing.alert.id}>
        <SingleAlert alert={alertWithDisappearing.alert} isDisappearing={alertWithDisappearing.isDisappearing}/>
      </div>
    )
  });

  return (
    <div className={classes.Alerts}>
      {alertsBlock}
    </div>
  );
});

export default Alerts;