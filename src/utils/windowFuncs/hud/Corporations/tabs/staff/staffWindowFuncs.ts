import { StaffTabInitialStateInterface } from '../../../../../../models/hud/corporations/tabs/staff/tabs/staffInterfaces';

const window_corporations_staff_openStaffTab = (jsonData: string) => {
  const parsedData = JSON.parse(jsonData);

  const transformedData: StaffTabInitialStateInterface = {
    currentPage: parsedData.CurrentPage,
    pagesCount: parsedData.PagesCount,
    staff: parsedData.Staff.slice(0, 10).map((singleWorker) => {
      return {
        nickname: singleWorker.Nickname,
        role: singleWorker.Role,
        potentialRoles: singleWorker.PotentialRoles,
        averageOnline: singleWorker.AverageOnline,
        averageEarns: singleWorker.AverageEarns,
        contributedToTreasury: singleWorker.ContributedToTreasury,
        boostStatus: singleWorker.BoostStatus,
      };
    }),
  };

  return transformedData;
};

export { window_corporations_staff_openStaffTab };
