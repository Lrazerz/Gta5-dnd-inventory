import {SingleAlertInterface} from "../../../models/alert/interfaces";
import {ALERT_REMOVE, ALERT_SET} from "../../actions/alert/alertTypes";
import {AlertTypesEnum} from "../../../models/alert/enums";

interface InitialStateInterface {
  alerts: SingleAlertInterface[];
}

const initialState = {
  alerts: []
}

// const initialState = {
//   alerts: [
//     {
//       id: '0',
//       message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh justo',
//       type: AlertTypesEnum.success
//     },
//     {
//       id: '1',
//       message: 'ullamcorper non nisl id, fringilla vehicula dolor. Vestibulum nulla purus, fermentum eget',
//       type: AlertTypesEnum.warning
//     },
//     {
//       id: '2',
//       message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh justo',
//       type: AlertTypesEnum.error
//     },
//   ]
// }

export default (state = initialState, action) => {
  switch (action.type) {
    case ALERT_SET: {
      return {
        ...state,
        alerts: [
          action.alert,
          ...state.alerts
        ].slice(0,3)
      }
    }
    case ALERT_REMOVE: {
      return {
        ...state,
        alerts: state.alerts.filter(alert => alert.id !== action.id)
      }
    }
    default: {
      return state;
    }
  }
}