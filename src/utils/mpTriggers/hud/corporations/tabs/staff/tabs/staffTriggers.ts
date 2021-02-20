import { CorporationsTabsDict } from '../../../../../../../models/hud/corporations/enums';
import { SingleStaffWorkerInterface } from '../../../../../../../models/hud/corporations/tabs/staff/tabs/staffInterfaces';

const mpTrigger_corporations_staff_changePage = (pageNumber: number, lastMember: SingleStaffWorkerInterface) => {
  try {
    const data = JSON.stringify({
      OpenedTab: CorporationsTabsDict.staff,
      PageNumber: pageNumber,
      LastMember: {
        Nickname: lastMember.nickname,
        Role: lastMember.role,
        PotentialRoles: lastMember.potentialRoles,
        AverageOnline: lastMember.averageOnline,
        AverageEarns: lastMember.averageEarns,
        ContributedToTreasury: lastMember.contributedToTreasury,
      },
    });
    console.log('cef_cl_corporations_staff_changePage', data);
    // @ts-ignore
    mp.trigger('cef_cl_corporations_staff_changePage', data);
  } catch (e) {}
};

const mpTrigger_corporations_staff_setFilter = (text: string) => {
  try {
    const data = JSON.stringify({
      OpenedTab: CorporationsTabsDict.staff,
      SearchText: text,
    });
    console.log('cef_cl_corporations_staff_setFilter', data);
    // @ts-ignore
    mp.trigger('cef_cl_corporations_staff_setFilter', data);
  } catch (e) {}
};

const mpTrigger_corporations_staff_removeFromRole = (playerNickname: string, roleTitle: string) => {
  try {
    const data = JSON.stringify({
      OpenedTab: CorporationsTabsDict.staff,
      Nickname: playerNickname,
      Role: roleTitle,
    });
    console.log('cef_cl_corporations_staff_removeFromRole', data);
    // @ts-ignore
    mp.trigger('cef_cl_corporations_staff_removeFromRole', data);
  } catch (e) {}
};

const mpTrigger_corporations_staff_addToRole = (playerNickname: string, roleTitle: string) => {
  try {
    const data = JSON.stringify({
      OpenedTab: CorporationsTabsDict.staff,
      Nickname: playerNickname,
      Role: roleTitle,
    });
    console.log('cef_cl_corporations_staff_addToRole', data);
    // @ts-ignore
    mp.trigger('cef_cl_corporations_staff_addToRole', data);
  } catch (e) {}
};

const mpTrigger_corporations_staff_kick = (playerNickname: string) => {
  try {
    const data = JSON.stringify({
      OpenedTab: CorporationsTabsDict.staff,
      Nickname: playerNickname,
    });
    console.log('cef_cl_corporations_staff_kick', data);
    // @ts-ignore
    mp.trigger('cef_cl_corporations_staff_kick', data);
  } catch (e) {}
};

export {
  mpTrigger_corporations_staff_changePage,
  mpTrigger_corporations_staff_setFilter,
  mpTrigger_corporations_staff_removeFromRole,
  mpTrigger_corporations_staff_addToRole,
  mpTrigger_corporations_staff_kick,
};
