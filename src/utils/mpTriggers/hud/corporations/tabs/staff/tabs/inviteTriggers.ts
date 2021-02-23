import { CorporationsTabsDict } from '../../../../../../../models/hud/corporations/enums';

const mpTrigger_corporations_staff_invitePlayer = (nickname: string) => {
  try {
    const data = JSON.stringify({
      OpenedTab: CorporationsTabsDict.staff,
      nickname,
    });
    console.log('cef_cl_corporations_staff_invitePlayer', data);
    mp.trigger('cef_cl_corporations_staff_invitePlayer', data);
  } catch (e) {}
};
