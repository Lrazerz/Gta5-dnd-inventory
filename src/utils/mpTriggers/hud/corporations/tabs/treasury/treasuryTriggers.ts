import { CorporationsTabsDict } from '../../../../../../models/hud/corporations/enums';

const mpTrigger_corporations_treasury_changeAvailableAmount = (amount: number) => {
  console.log('cef_cl_corporations_treasury_changeAvailableAmount', CorporationsTabsDict.treasury, amount);
  try {
    const jsonData = JSON.stringify({
      OpenedTab: CorporationsTabsDict.treasury,
      Amount: amount,
    });
    mp.trigger('cef_cl_corporations_treasury_changeAvailableAmount', jsonData);
  } catch (e) {}
};

const mpTrigger_corporations_treasury_withdraw = (amount: number) => {
  console.log('cef_cl_corporations_treasury_withdraw', CorporationsTabsDict.treasury, amount);
  try {
    const jsonData = JSON.stringify({
      OpenedTab: CorporationsTabsDict.treasury,
      Amount: amount,
    });
    mp.trigger('cef_cl_corporations_treasury_withdraw', jsonData);
  } catch (e) {}
};

const mpTrigger_corporations_treasury_put = (amount: number) => {
  console.log('cef_cl_corporations_treasury_put', CorporationsTabsDict.treasury, amount);
  try {
    const jsonData = JSON.stringify({
      OpenedTab: CorporationsTabsDict.treasury,
      Amount: amount,
    });
    mp.trigger('cef_cl_corporations_treasury_put', jsonData);
  } catch (e) {}
};

const mpTrigger_corporations_treasury_transfer = (nickname: string, amount: number) => {
  console.log('cef_cl_corporations_treasury_transfer', CorporationsTabsDict.treasury, nickname, amount);
  try {
    const jsonData = JSON.stringify({
      OpenedTab: CorporationsTabsDict.treasury,
      Nickname: nickname,
      Amount: amount,
    });
    mp.trigger('cef_cl_corporations_treasury_transfer', jsonData);
  } catch (e) {}
};

export {
  mpTrigger_corporations_treasury_changeAvailableAmount,
  mpTrigger_corporations_treasury_withdraw,
  mpTrigger_corporations_treasury_put,
  mpTrigger_corporations_treasury_transfer,
};
