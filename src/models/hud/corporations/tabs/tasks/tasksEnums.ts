enum CorporationsTasksTabsEnumEng {
  currentTasks,
  newTask,
  archiveTasks,
}

enum CorporationsTasksTabsEnumRus {
  'Текущие задачи',
  'Новая задача',
  'Архив задач',
}

// to server
const CorporationsTasksTabsDict = {
  [CorporationsTasksTabsEnumEng[0]]: CorporationsTasksTabsEnumRus[0],
  [CorporationsTasksTabsEnumEng[1]]: CorporationsTasksTabsEnumRus[1],
  [CorporationsTasksTabsEnumEng[2]]: CorporationsTasksTabsEnumRus[2],
};

let translateTasksTabToServer: (tab: CorporationsTasksTabsEnumEng) => string;
translateTasksTabToServer = (tab) => {
  return CorporationsTasksTabsDict[CorporationsTasksTabsEnumEng[tab]];
};

export {
  CorporationsTasksTabsEnumEng,
  CorporationsTasksTabsEnumRus,
  CorporationsTasksTabsDict,
  // to server
  translateTasksTabToServer,
};
