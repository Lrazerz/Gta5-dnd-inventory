enum CorporationsStaffTabsEnumEng {
  personal,
  invite,
}

enum CorporationsStaffTabsEnumRus {
  'Персонал',
  'Пригласить игрока',
}

// to server
const CorporationsStaffTabsDict = {
  [CorporationsStaffTabsEnumEng[0]]: CorporationsStaffTabsEnumRus[0],
  [CorporationsStaffTabsEnumEng[1]]: CorporationsStaffTabsEnumRus[1],
  [CorporationsStaffTabsEnumEng[2]]: CorporationsStaffTabsEnumRus[2],
};

let translateStaffTabToServer: (tab: CorporationsStaffTabsEnumEng) => string;
translateStaffTabToServer = (tab) => {
  return CorporationsStaffTabsDict[CorporationsStaffTabsEnumEng[tab]];
};

export { CorporationsStaffTabsEnumEng, CorporationsStaffTabsEnumRus, translateStaffTabToServer };
