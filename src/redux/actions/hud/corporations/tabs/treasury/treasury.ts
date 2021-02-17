import { TreasuryInitialStateInterface } from '../../../../../../models/hud/corporations/tabs/treasury/treasuryInterfaces';
import {
  CORPORATIONS_TREASURY_CHANGE_AVAILABLE_AMOUNT,
  CORPORATIONS_TREASURY_OPEN,
  CORPORATIONS_TREASURY_PUT_MONEY,
  CORPORATIONS_TREASURY_WITHDRAW_MONEY,
} from './treasuryTypes';
import {
  mpTrigger_corporations_treasury_changeAvailableAmount,
  mpTrigger_corporations_treasury_put,
  mpTrigger_corporations_treasury_withdraw,
} from '../../../../../../utils/mpTriggers/hud/corporations/tabs/treasury/treasuryTriggers';

const corporationsTreasuryChangeAvailableAmount = (amount: number) => {
  return (dispatch) => {
    mpTrigger_corporations_treasury_changeAvailableAmount(amount);
    dispatch({ type: CORPORATIONS_TREASURY_CHANGE_AVAILABLE_AMOUNT, amount });
  };
};

const corporationsTreasuryOpenAction = (treasuryData: TreasuryInitialStateInterface) => {
  return { type: CORPORATIONS_TREASURY_OPEN, treasury: treasuryData };
};

const corporationsTreasuryWithdrawMoneyAction = (amount: number) => {
  return (dispatch) => {
    mpTrigger_corporations_treasury_withdraw(amount);
    dispatch({ type: CORPORATIONS_TREASURY_WITHDRAW_MONEY, amount });
  };
};

const corporationsTreasuryPutMoneyAction = (amount: number) => {
  return (dispatch) => {
    mpTrigger_corporations_treasury_put(amount);
    dispatch({ type: CORPORATIONS_TREASURY_PUT_MONEY, amount });
  };
};

const corporationsTreasuryTransferMoneyAction = () => {};

export {
  corporationsTreasuryChangeAvailableAmount,
  corporationsTreasuryOpenAction,
  corporationsTreasuryWithdrawMoneyAction,
  corporationsTreasuryPutMoneyAction,
  corporationsTreasuryTransferMoneyAction,
};
