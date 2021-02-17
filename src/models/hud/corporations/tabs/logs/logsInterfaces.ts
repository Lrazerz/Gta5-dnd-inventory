interface SingleLogInterface {
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

export { SingleLogInterface, LogsInitialStateInterface };
