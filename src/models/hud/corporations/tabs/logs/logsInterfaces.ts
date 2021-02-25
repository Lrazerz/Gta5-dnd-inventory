import { DateObjectInterface } from '../../../phone/reducerInterfaces';

interface SingleLogInterface {
  date: DateObjectInterface;
  executor: string; // DigitalNox Design
  action: string; // создает
  type: string; // новую роль
  description: string; // Администратор
}

interface LogsInitialStateInterface {
  currentPage: number;
  pagesCount: number;
  logs: SingleLogInterface[];
}

export interface ServerLogInterface {
  Date: string;
  Executor: string;
  Action: string;
  Type: string;
  Description: string;
}

export { SingleLogInterface, LogsInitialStateInterface };
