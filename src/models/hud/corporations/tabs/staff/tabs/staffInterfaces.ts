interface SingleStaffWorkerInterface {
  nickname: string;
  // "" - no role
  role: string;
  potentialRoles: string[];
  averageOnline: number;
  averageEarns: number;
  contributedToTreasury: number;
  boostStatus: number; // ?
}

interface StaffTabInitialStateInterface {
  currentPage: number;
  pagesCount: number;
  staff: SingleStaffWorkerInterface[];
}

// state, useReducer
interface StaffTabInitialStateInterfaceWithLoading extends StaffTabInitialStateInterface {
  isLoading: boolean;
}

export { SingleStaffWorkerInterface, StaffTabInitialStateInterface, StaffTabInitialStateInterfaceWithLoading };
