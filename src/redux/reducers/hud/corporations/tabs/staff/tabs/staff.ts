import { StaffTabInitialStateInterfaceWithLoading } from '../../../../../../../models/hud/corporations/tabs/staff/tabs/staffInterfaces';
import {
  STAFF_STAFF_ADD_TO_ROLE,
  STAFF_STAFF_CHANGE_PAGE,
  STAFF_STAFF_KICK,
  STAFF_STAFF_OPEN,
  STAFF_STAFF_REMOVE_FROM_ROLE,
} from '../../../../../../actions/hud/corporations/tabs/staff/tabs/staffTypes';
import { CORPORATIONS_STAFF_OPEN_TAB } from '../../../../../../actions/hud/corporations/tabs/staff/staffTypes';
import { CORPORATIONS_TAB_OPEN } from '../../../../../../actions/hud/corporations/corporationsTypes';
import { CorporationsTabsEnum } from '../../../../../../../models/hud/corporations/enums';
import { CorporationsStaffTabsEnumEng } from '../../../../../../../models/hud/corporations/tabs/staff/staffEnums';
// import logs from '../../logs/logs';

// const initialState: StaffTabInitialStateInterfaceWithLoading = {
//   isLoading: false,
//   currentPage: 1,
//   pagesCount: 10,
//   staff: [
//     {
//       nickname: 'DigitalNox Design1',
//       role: 'new role',
//       potentialRoles: [
//         'Role1231321312',
//         'Role23213213',
//         'Role3',
//         'Role1',
//         'Role2213',
//         'Role12321312',
//         'Role232113',
//         'Role12313212',
//         'Role2321313',
//         'Role312',
//         'Role23213',
//         'Role12313312',
//         'Rol213',
//       ],
//       averageOnline: 500,
//       averageEarns: 500,
//       contributedToTreasury: 500,
//       boostStatus: 0,
//     },
//     {
//       nickname: 'DigitalNox Design2',
//       role: '',
//       potentialRoles: ['Role1', 'Role2', 'Role3'],
//       averageOnline: 500,
//       averageEarns: 500,
//       contributedToTreasury: 500,
//       boostStatus: 0,
//     },
//     {
//       nickname: 'DigitalNox Design3',
//       role: '',
//       potentialRoles: ['Role1', 'Role2', 'Role3'],
//       averageOnline: 500,
//       averageEarns: 500,
//       contributedToTreasury: 500,
//       boostStatus: 0,
//     },
//     {
//       nickname: 'DigitalNox Design4',
//       role: '',
//       potentialRoles: ['Role1', 'Role2', 'Role3'],
//       averageOnline: 500,
//       averageEarns: 500,
//       contributedToTreasury: 500,
//       boostStatus: 0,
//     },
//     {
//       nickname: 'DigitalNox Design5',
//       role: '',
//       potentialRoles: ['Role1', 'Role2', 'Role3'],
//       averageOnline: 500,
//       averageEarns: 500,
//       contributedToTreasury: 500,
//       boostStatus: 0,
//     },
//     {
//       nickname: 'DigitalNox Design6',
//       role: '',
//       potentialRoles: ['Role1', 'Role2', 'Role3'],
//       averageOnline: 500,
//       averageEarns: 500,
//       contributedToTreasury: 500,
//       boostStatus: 0,
//     },
//     {
//       nickname: 'DigitalNox Design7',
//       role: '',
//       potentialRoles: ['Role1', 'Role2', 'Role3'],
//       averageOnline: 500,
//       averageEarns: 500,
//       contributedToTreasury: 500,
//       boostStatus: 0,
//     },
//     {
//       nickname: 'DigitalNox Design8',
//       role: '',
//       potentialRoles: ['Role1', 'Role2', 'Role3'],
//       averageOnline: 500,
//       averageEarns: 500,
//       contributedToTreasury: 500,
//       boostStatus: 0,
//     },
//     {
//       nickname: 'DigitalNox Design9',
//       role: '',
//       potentialRoles: ['Role1', 'Role2', 'Role3'],
//       averageOnline: 500,
//       averageEarns: 500,
//       contributedToTreasury: 500,
//       boostStatus: 0,
//     },
//     {
//       nickname: 'DigitalNox Design10',
//       role: '',
//       potentialRoles: ['Role1', 'Role2', 'Role3'],
//       averageOnline: 500,
//       averageEarns: 500,
//       contributedToTreasury: 500,
//       boostStatus: 0,
//     },
//   ],
// };

const initialState: StaffTabInitialStateInterfaceWithLoading = {
  isLoading: false,
  currentPage: 1,
  pagesCount: 1,
  staff: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CORPORATIONS_TAB_OPEN: {
      const stateToReturn = { ...initialState };

      if (action.openedTab === CorporationsTabsEnum.staff) {
        stateToReturn.isLoading = true;
      }
      return stateToReturn;
    }
    case CORPORATIONS_STAFF_OPEN_TAB: {
      const stateToReturn = { ...initialState };

      if (action.tab === CorporationsStaffTabsEnumEng.staff) {
        stateToReturn.isLoading = true;
      }

      return stateToReturn;
    }
    case STAFF_STAFF_OPEN: {
      return {
        ...state,
        ...action.tabData,
        isLoading: false,
      };
    }
    case STAFF_STAFF_CHANGE_PAGE: {
      return {
        ...state,
        currentPage: action.pageNumber,
        isLoading: true,
        staff: [],
      };
    }
    case STAFF_STAFF_REMOVE_FROM_ROLE: {
      // rem role and add to potential roles
      const selectedPlayerId = state.staff.findIndex((singlePlayer) => singlePlayer.nickname === action.playerNickname);

      if (selectedPlayerId === -1) {
        return state;
      }

      const newPotentialRoles = [...state.staff[selectedPlayerId].potentialRoles, state.staff[selectedPlayerId].role];

      return {
        ...state,
        staff: [
          ...state.staff.slice(0, selectedPlayerId),
          {
            ...state.staff[selectedPlayerId],
            role: '',
            potentialRoles: newPotentialRoles,
          },
          ...state.staff.slice(selectedPlayerId + 1),
        ],
      };
    }
    case STAFF_STAFF_ADD_TO_ROLE: {
      const selectedPlayerId = state.staff.findIndex((singlePlayer) => singlePlayer.nickname === action.playerNickname);

      if (selectedPlayerId === -1) {
        return state;
      }

      // new potentialRoles
      const selectedPotentialRoleId = state.staff[selectedPlayerId].potentialRoles.findIndex(
        (potentialRole) => potentialRole === action.roleTitle,
      );

      let newPotentialRoles;

      if (selectedPotentialRoleId === -1) {
        newPotentialRoles = state.staff[selectedPlayerId].potentialRoles;
      } else {
        newPotentialRoles = [
          ...state.staff[selectedPlayerId].potentialRoles.slice(0, selectedPotentialRoleId),
          state.staff[selectedPlayerId].role,
          ...state.staff[selectedPlayerId].potentialRoles.slice(selectedPotentialRoleId + 1),
        ];
      }

      return {
        ...state,
        staff: [
          ...state.staff.slice(0, selectedPlayerId),
          {
            ...state.staff[selectedPlayerId],
            role: action.roleTitle,
            potentialRoles: newPotentialRoles,
          },
          ...state.staff.slice(selectedPlayerId + 1),
        ],
      };
    }
    case STAFF_STAFF_KICK: {
      const selectedPlayerId = state.staff.findIndex((singlePlayer) => singlePlayer.nickname === action.playerNickname);

      if (selectedPlayerId === -1) {
        return state;
      }

      return {
        ...state,
        staff: [...state.staff.slice(0, selectedPlayerId), ...state.staff.slice(selectedPlayerId + 1)],
      };
    }

    default: {
      return state;
    }
  }
};
