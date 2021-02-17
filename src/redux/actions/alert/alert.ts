import { ALERT_REMOVE, ALERT_SET } from './alertTypes';
import shortId from 'shortid';
import { SingleAlertInterface } from '../../../models/alert/interfaces';
import { AlertTypesEnum } from '../../../models/alert/enums';

const _setAlert = (alert: SingleAlertInterface) => {
  return { type: ALERT_SET, alert };
};

const _removeAlert = (alertId: string) => {
  return { type: ALERT_REMOVE, id: alertId };
};

const setAlert = (message: string, alertType: AlertTypesEnum = AlertTypesEnum.success, timeout = 5000) => {
  return (dispatch) => {
    const id = shortId.generate();
    dispatch(_setAlert({ id, message, type: alertType }));

    setTimeout(() => dispatch(_removeAlert(id)), timeout);
  };
};

export { setAlert };
