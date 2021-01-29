interface TreasuryInitialStateInterfaceWithLoading {
  treasuryAmount: number;
  withdrawAvailableToday: number;
  putAvailableToday: number;
  isLoading: boolean;
}

interface TreasuryInitialStateInterface {
  treasuryAmount: number;
  withdrawAvailableToday: number;
  putAvailableToday: number;
}

export {
  TreasuryInitialStateInterfaceWithLoading,
  TreasuryInitialStateInterface
}