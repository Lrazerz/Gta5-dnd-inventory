import {TreasuryInitialStateInterface} from "../../../../../../hud/models/corporations/tabs/treasury/treasuryInterfaces";
import {
  CORPORATIONS_TREASURY_CHANGE_AVAILABLE_AMOUNT,
  CORPORATIONS_TREASURY_OPEN,
  CORPORATIONS_TREASURY_WITHDRAW_MONEY
} from "./treasuryTypes";
import {mpTrigger_corporations_treasury_withdraw} from "../../../../../../utils/mpTriggers/hud/corporations/tabs/treasury/treasuryTriggers";

const corporationsTreasuryChangeAvailableAmount = (amount: number) => {
  return {type: CORPORATIONS_TREASURY_CHANGE_AVAILABLE_AMOUNT, amount}
}

const corporationsTreasuryOpenAction = (treasuryData: TreasuryInitialStateInterface) => {
  return {type: CORPORATIONS_TREASURY_OPEN, treasury: treasuryData};
}

const corporationsTreasuryWithdrawMoneyAction = (amount: number) => {
  return dispatch => {
    mpTrigger_corporations_treasury_withdraw(amount);
    dispatch({type: CORPORATIONS_TREASURY_WITHDRAW_MONEY, amount});
  }
}

const corporationsTreasuryPutMoneyAction = () => {

}

const corporationsTreasuryTransferMoneyAction = () => {

}

export {
  corporationsTreasuryChangeAvailableAmount,
  corporationsTreasuryOpenAction,
  corporationsTreasuryWithdrawMoneyAction,
  corporationsTreasuryPutMoneyAction,
  corporationsTreasuryTransferMoneyAction
}