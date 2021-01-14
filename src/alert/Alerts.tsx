import React, {CSSProperties, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import classes from '../styles/alert/Alerts.module.scss';
import {SingleAlertInterface} from "../models/alert/interfaces";
import {AlertTypesEnum} from "../models/alert/enums";
import AlertsText from "./AlertsText";
import SingleAlert from "./SingleAlert";
import {makeLogger} from "ts-loader/dist/logger";

interface AlertWithDisappearingInterface {
  alert: SingleAlertInterface;
  isDisappearing: boolean;
}

interface Props {
}

const Alerts: React.FC<Props> = React.memo(() => {

  const alerts: SingleAlertInterface[] = useSelector(({alert}) => alert.alerts);

  const [alertsWithDisappearing, setAlertsWithDisappearing]: [AlertWithDisappearingInterface[], any] = useState([]);

  console.log('alerts', alerts);
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
            // console.log('Didnt find (element deprecated)');
            timeOuts.push(setTimeout(() => {
              console.log('SET timeout function')
              removeAlertWithDisappearing(alertsWithDisappearing[i].alert.id);
            }, 2000));

            // element disappeared
            disappearedElements.push({...alertsWithDisappearing[i], isDisappearing: true});
          }
        }
        // console.log('disappeared alerts', disappearedElements);

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
    console.log('ReMOVE ALERTWITHDISS', id)
    setAlertsWithDisappearing(prevAlerts => prevAlerts.filter(alert => alert.alert.id !== id));
  }

  // const alertsBlock: JSX.Element[] = [
  //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh justo',
  //   'ullamcorper non nisl id, fringilla vehicula dolor. Vestibulum nulla purus, fermentum eget',
  //   'accumsan at, varius ut libero. Praesent bibendum nibh'
  // ].map(alertMessage => (
  //   <div className={classes.SingleAlert}>
  //     {alertMessage}
  //   </div>
  // ))

  console.log('alertsWithDis', alertsWithDisappearing);

  const alertsBlock: JSX.Element[] = alertsWithDisappearing.length > 0 && alertsWithDisappearing.map(alertWithDisappearing => {

    // console.log('bfore err', alertWithDisappearing);
    return (
      <div className={classes.SingleAlertWrapper} key={alertWithDisappearing.alert.id}>
        <SingleAlert alert={alertWithDisappearing.alert} isDisappearing={alertWithDisappearing.isDisappearing}/>
      </div>
    )
  });

  // console.log('alertsBlock', alertsBlock, alertsWithDisappearing);
  return (
    <div className={classes.Alerts}>
      {alertsBlock}
    </div>
  );
});

export default Alerts;