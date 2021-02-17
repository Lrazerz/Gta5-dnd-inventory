interface SingleStaffWorkerInterface {
  nickname: string;
  // "" - no role
  role: string;
  potentialRoles: string[];
  averageOnline: number;
  averageEarns: number;
  contributedToTreasury: number;
}

interface StaffTabInitialStateInterface {
  currentPage: number;
  pagesCount: number;
  staff: SingleStaffWorkerInterface[];
}

export { SingleStaffWorkerInterface, StaffTabInitialStateInterface };
