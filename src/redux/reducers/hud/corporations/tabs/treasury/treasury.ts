import {
  CORPORATIONS_TREASURY_CHANGE_AVAILABLE_AMOUNT,
  CORPORATIONS_TREASURY_OPEN, CORPORATIONS_TREASURY_WITHDRAW_MONEY
} from "../../../../../actions/hud/corporations/tabs/treasury/treasuryTypes";
import {TreasuryInitialStateInterfaceWithLoading} from "../../../../../../hud/models/corporations/tabs/treasury/treasuryInterfaces";
import {CORPORATIONS_TAB_OPEN} from "../../../../../actions/hud/corporations/corporationsTypes";
import {CorporationsTabsEnum} from "../../../../../../hud/models/corporations/enums";

const initialState: TreasuryInitialStateInterfaceWithLoading = {
  treasuryAmount: 0,
  withdrawAvailableToday: 0,
  isLoading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CORPORATIONS_TAB_OPEN: {
      let isLoading = false;
      if(action.openedTab === CorporationsTabsEnum.treasury) {
        isLoading = true;
      }
      return {
        ...initialState,
        isLoading
      }
    }
    case CORPORATIONS_TREASURY_OPEN: {
      return {
        ...state,
        ...action.treasury,
        isLoading: false,
      }
    }
    case CORPORATIONS_TREASURY_CHANGE_AVAILABLE_AMOUNT: {
      return {
        ...state,
        withdrawAvailableToday: action.amount
      }
    }
    case CORPORATIONS_TREASURY_WITHDRAW_MONEY: {
      return {
        ...state,
        treasuryAmount: state.treasuryAmount - action.amount,
        withdrawAvailableToday: state.withdrawAvailableToday - action.amount,
      }
    }
    default: {
      return state;
    }
  }
}