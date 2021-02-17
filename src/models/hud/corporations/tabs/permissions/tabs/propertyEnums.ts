// displayed tabs
import { CorporationsTabsDict } from '../../../enums';

const _PermissionsPropertyDisplayedTabsDict = {
  bases: 'Базы',
  office: 'Офис',
  corporations: 'Корпорации',
  garage: 'Гараж',
  hangar: 'Ангар',
  storage: 'Склад',
};
// tabs to use in redux, mpTriggers
const PermissionsPropertyTabsDict = {
  ..._PermissionsPropertyDisplayedTabsDict,
};

enum PermissionsPropertyTabsEnum {
  bases,
  office,
  corporations,
  garage,
  hangar,
  storage,
}

const PermissionsPropertyDisplayedTabsRussian = [];
for (const key in _PermissionsPropertyDisplayedTabsDict) {
  PermissionsPropertyDisplayedTabsRussian.push(_PermissionsPropertyDisplayedTabsDict[key]);
}

export { PermissionsPropertyTabsDict, PermissionsPropertyTabsEnum, PermissionsPropertyDisplayedTabsRussian };
