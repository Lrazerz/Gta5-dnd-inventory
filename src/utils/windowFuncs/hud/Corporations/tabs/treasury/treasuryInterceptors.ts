// for refresh too

import {TreasuryInitialStateInterface} from "../../../../../../hud/models/corporations/tabs/treasury/treasuryInterfaces";

let corporations_openTreasury: (jsonData: string) => TreasuryInitialStateInterface;
corporations_openTreasury = (jsonData) => {
  const parsedData = JSON.parse(jsonData);

  return {
    treasuryAmount: parsedData.Amount,
    withdrawAvailableToday: parsedData.WithdrawAvailableToday
  }
}

export {
  corporations_openTreasury
}