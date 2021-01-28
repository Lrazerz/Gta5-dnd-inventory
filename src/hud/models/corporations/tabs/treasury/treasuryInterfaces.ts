interface TreasuryInitialStateInterfaceWithLoading {
  treasuryAmount: number;
  withdrawAvailableToday: number;
  isLoading: boolean;
}

interface TreasuryInitialStateInterface {
  treasuryAmount: number;
  withdrawAvailableToday: number;
}

export {
  TreasuryInitialStateInterfaceWithLoading,
  TreasuryInitialStateInterface
}