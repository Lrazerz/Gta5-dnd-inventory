import { AlertTypesEnum } from '../../../models/alert/enums';

interface AcceptedAlertInterface {
  Type: 'Success' | 'Warning' | 'Error';
  Message: string;
  Duration: number; // ms
}

const window_setAlert = (jsonData: string) => {
  const parsedData: AcceptedAlertInterface = JSON.parse(jsonData);

  let alertType;

  switch (parsedData.Type.toLowerCase()) {
    case 'success': {
      alertType = AlertTypesEnum.success;
      break;
    }
    case 'warning': {
      alertType = AlertTypesEnum.warning;
      break;
    }
    case 'error': {
      alertType = AlertTypesEnum.error;
      break;
    }
  }

  return {
    type: alertType,
    message: parsedData.Message,
    duration: parsedData.Duration,
  };
};

export { window_setAlert };
