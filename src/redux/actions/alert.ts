import {ALERT_SET, ALERT_REMOVE} from "./types";
import {v4 as uuid4} from 'uuid';

const _setAlert = (alert) => {
  return {type: ALERT_SET, alert}
}
const _removeAlert = (alertId) => {
  return {type: ALERT_REMOVE, alertId}
}

export const setAlert = (msg, alertType, timeout = 4000) => {
  return dispatch => {
    const id = uuid4();
    dispatch(_setAlert({msg, alertType, id}));

    setTimeout(() => dispatch(_removeAlert(id)), timeout);
  }
}