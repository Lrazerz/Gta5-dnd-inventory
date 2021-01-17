// displayed tabs
const _CorporationsDisplayedTabsDict = {
  permissions: 'Разрешения',
  staff: 'Персонал',
  treasury: 'Казна',
  property: 'Управление имуществом',
  territory: 'Контроль территории',
  logs: 'Логи',
  tasks: 'Задачи'
}
// tabs to use in redux, mpTriggers
const CorporationsTabsDict = {
  ..._CorporationsDisplayedTabsDict,
  boost: 'Буст'
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

const CorporationsDisplayedTabsRussian = [];
for(const key in _CorporationsDisplayedTabsDict) {
  CorporationsDisplayedTabsRussian.push(CorporationsTabsDict[key]);
}

// permissions screen
const _PermissionsDisplayedTabsDict = {
  modules: 'Модули',
  houses: 'Недвижимость',
  enterprises: 'Предприятия',
  auto: 'Техника',
  property: 'Имущество корпорации'
}

const CorporationsPermissionsTabsDict = {
  ..._PermissionsDisplayedTabsDict,
  addNewRole: 'Новая роль'
}

const PermissionsSubTabsRussian = [];
for(const key in _PermissionsDisplayedTabsDict) {
  PermissionsSubTabsRussian.push(_PermissionsDisplayedTabsDict[key]);
}

enum CorporationsPermissionsTabsEnum {
  modules,
  houses,
  enterprises,
  auto,
  property,

  addNewRole
}

export {
  CorporationsTabsDict,
  CorporationsTabsEnum,
  CorporationsDisplayedTabsRussian,
  // permissions tab
  CorporationsPermissionsTabsDict,
  CorporationsPermissionsTabsEnum,
  PermissionsSubTabsRussian
}