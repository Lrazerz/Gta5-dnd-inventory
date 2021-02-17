// uppercase to server
enum LogsSearchByEnumEng {
  ExecutorName,
  Action,
  Type,
  Description,
}

enum LogsSearchByEnumRus {
  игрок,
  действие,
  тип,
  описание,
}

// { executorName: игрок, ... }
const LogsSearchByDict = {
  [LogsSearchByEnumEng[0]]: LogsSearchByEnumRus[0],
  [LogsSearchByEnumEng[1]]: LogsSearchByEnumRus[1],
  [LogsSearchByEnumEng[2]]: LogsSearchByEnumRus[2],
  [LogsSearchByEnumEng[3]]: LogsSearchByEnumRus[3],
};

console.log(LogsSearchByDict);

// for search dropdown
const LogsSearchByRussian = [];
for (const key in LogsSearchByDict) {
  LogsSearchByRussian.push(LogsSearchByDict[key]);
}

export { LogsSearchByEnumEng, LogsSearchByEnumRus, LogsSearchByDict, LogsSearchByRussian };
