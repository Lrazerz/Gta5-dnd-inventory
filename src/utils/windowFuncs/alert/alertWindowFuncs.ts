import {AlertTypesEnum} from "../../../models/alert/enums";

interface AcceptedAlertInterface {
  Type: 'Success' | 'Warning' | 'Error';
  Message: string;
  Duration: number; // ms
}

const alertWindowFunc = (jsonData: string) => {
  const parsedData: AcceptedAlertInterface = JSON.parse(jsonData);

  let alertType;

  switch (parsedData.Type) {
    case "Success": {
      alertType = AlertTypesEnum.success;
      break;
    }
    case "Warning": {
      alertType = AlertTypesEnum.warning;
      break;
    }
    case "Error": {
      alertType = AlertTypesEnum.error;
      break;
    }
  }

  return {
    type: alertType,
    message: parsedData.Message,
    duration: parsedData.Duration
  }
}

export {
  alertWindowFunc
}