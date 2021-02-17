// for refresh too
import { TreasuryInitialStateInterface } from '../../../../../../models/hud/corporations/tabs/treasury/treasuryInterfaces';

let corporations_openTreasury: (jsonData: string) => TreasuryInitialStateInterface;
corporations_openTreasury = (jsonData) => {
  const parsedData = JSON.parse(jsonData);

  return {
    treasuryAmount: parsedData.Amount,
    withdrawAvailableToday: parsedData.WithdrawAvailableToday,
    putAvailableToday: parsedData.PutAvailableToday,
  };
};

export { corporations_openTreasury };
