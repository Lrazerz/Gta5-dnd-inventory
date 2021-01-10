// displayed tabs
const CorporationsTabsDict = {
  permissions: 'Разрешения',
  staff: 'Персонал',
  treasury: 'Казна',
  property: 'Управление имуществом',
  territory: 'Контроль территории',
  logs: 'Логи',
  tasks: 'Задачи'
}

enum CorporationsTabsEnum {
  permissions,
  staff,
  treasury,
  property,
  territory,
  logs,
  tasks,
  boost,

  addNewRole,
  mainTab
}

const CorporationsTabsRussian = [];
for(const key in CorporationsTabsDict) {
  CorporationsTabsRussian.push(CorporationsTabsDict[key]);
}

// permissions screen
const PermissionsSubTabsDict = {
  modules: 'Модули',
  houses: 'Недвижимость',
  enterprises: 'Предприятия',
  auto: 'Техника',
  property: 'Имущество корпорации'
}

enum CorporationsPermissionsTabsEnum {
  modules,
  houses,
  enterprises,
  auto,
  property
}

const PermissionsSubTabsRussian = [];

for(const key in PermissionsSubTabsDict) {
  PermissionsSubTabsRussian.push(PermissionsSubTabsDict[key]);
}

export {
  CorporationsTabsDict,
  CorporationsTabsEnum,
  CorporationsTabsRussian,
  // permissions tab
  PermissionsSubTabsDict,
  CorporationsPermissionsTabsEnum,
  PermissionsSubTabsRussian
}