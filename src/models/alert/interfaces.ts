import {AlertTypesEnum} from "./enums";

interface SingleAlertInterface {
  id: string;
  message: string;
  type: AlertTypesEnum;
}

export {
  SingleAlertInterface
}