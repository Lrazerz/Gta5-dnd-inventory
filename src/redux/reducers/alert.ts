import {ALERT_REMOVE, ALERT_SET} from "../actions/types";

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case ALERT_SET:
      return [
        ...state,
        action.alert
      ]
    case ALERT_REMOVE:
      return state.filter(alert => alert.id !== action.alertId)
    default:
      return state;
  }
}