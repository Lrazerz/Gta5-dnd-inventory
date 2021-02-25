import { CorporationsTabsDict } from '../../../../../../models/hud/corporations/enums';
import {
  CorporationsStaffTabsEnumEng,
  translateStaffTabToServer,
} from '../../../../../../models/hud/corporations/tabs/staff/staffEnums';

const mpTrigger_corporations_staff_openTab = (tab: CorporationsStaffTabsEnumEng) => {
  try {
    const data = JSON.stringify({
      OpenedTab: CorporationsTabsDict.staff,
      OpenedSubTab: translateStaffTabToServer(tab),
    });
    console.log('cef_cl_corporations_staff_openPage', data);
    mp.trigger('cef_cl_corporations_staff_openPage', data);
  } catch (e) {}
};

export { mpTrigger_corporations_staff_openTab };
