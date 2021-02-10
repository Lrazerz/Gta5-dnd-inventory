const currentTasksPageSize = 9;
const archiveTasksPageSize = 10;

//region -------------------- New task Tab --------------------
//region -------------------- Task title --------------------
const minTaskTitleLength = 2;
const minTaskTitleLengthMessage = `Минимальная длина: ${minTaskTitleLength}.`;
const maxTaskTitleLength = 20;
const maxTaskTitleLengthMessage = `Максимальная длина: ${minTaskTitleLength}.`;


const _taskTitleRegex = `^(\\w|_|[а-я]|[А-Я]|\\s){${minTaskTitleLength},${maxTaskTitleLength}}$`;
const taskTitleRegex = new RegExp(_taskTitleRegex);
const taskTitleRegexMessage = 'Введены недопустимые символы';
//endregion

//region -------------------- Task sum --------------------
const minTaskSum = 1;
const minTaskSumMessage = `Минимальная длина: ${minTaskSum}.`;
const maxTaskSum = 10000000000000;
const maxTaskSumMessage = `Максимальная длина: ${maxTaskSum}.`;
//endregion

//region -------------------- Nickname or role --------------------
const noTaskExecutorMessage = `Выберите исполнителя задачи с выпадающего списка.`;
const noTypedTaskExecutorMessage = `Введенный исполнитель не найден. Выберите исполнителя задачи со списка.`;
//endregion

//region -------------------- Task description --------------------
const minTaskDescriptionLength = 2;
const minTaskDescriptionLengthMessage = `Минимальная длина: ${minTaskDescriptionLength}`;
const maxTaskDescriptionLength = 300;
const maxTaskDescriptionLengthMessage = `Максимальная длина: ${maxTaskDescriptionLength}`;

const _taskDescriptionRegex = `^(\\w|_|[а-я]|[А-Я]|\\s){${minTaskDescriptionLength},${maxTaskDescriptionLength}}$`
const taskDescriptionRegex = new RegExp(_taskDescriptionRegex);
const taskDescriptionRegexMessage = 'Введены недопустимые символы';

//endregion

//endregion

export {
  currentTasksPageSize,
  archiveTasksPageSize,

  minTaskTitleLength,
  minTaskTitleLengthMessage,
  maxTaskTitleLength,
  maxTaskTitleLengthMessage,
  taskTitleRegex,
  taskTitleRegexMessage,

  minTaskSum,
  minTaskSumMessage,
  maxTaskSum,
  maxTaskSumMessage,

  noTaskExecutorMessage,
  noTypedTaskExecutorMessage,

  minTaskDescriptionLength,
  minTaskDescriptionLengthMessage,
  maxTaskDescriptionLength,
  maxTaskDescriptionLengthMessage,
  taskDescriptionRegex,
  taskDescriptionRegexMessage
}