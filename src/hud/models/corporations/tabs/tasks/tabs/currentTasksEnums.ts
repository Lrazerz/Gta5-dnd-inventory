enum TasksExecutorTypeEnum {
  nickname,
  role
}

// to server
enum TasksExecutorTypeEnumServer {
  Nickname,
  Role
}

const TasksExecutorTypeDict = {
  [TasksExecutorTypeEnum[0]]: TasksExecutorTypeEnumServer[0],
  [TasksExecutorTypeEnum[1]]: TasksExecutorTypeEnumServer[1],
}

// number => string
let translateTasksExecutorTypeToServer: (TasksExecutorTypeEnum) => string;
translateTasksExecutorTypeToServer = (executorType: TasksExecutorTypeEnum) => {
  return TasksExecutorTypeEnumServer[executorType];
}

// indexes equal
let translateTasksExecutorTypeFromServer: (TasksExecutorTypeEnumServer) => TasksExecutorTypeEnum;
translateTasksExecutorTypeFromServer = (executorType: TasksExecutorTypeEnumServer) => {
  let resultType: TasksExecutorTypeEnum;
  for(const key in TasksExecutorTypeDict) {
    if(TasksExecutorTypeDict[key] === TasksExecutorTypeEnumServer[executorType]) {
      resultType = TasksExecutorTypeEnum[key];
      break;
    }
  }
  return resultType;
}

export {
  TasksExecutorTypeEnum,

  TasksExecutorTypeEnumServer,
  // to Server
  translateTasksExecutorTypeToServer,
  translateTasksExecutorTypeFromServer
}