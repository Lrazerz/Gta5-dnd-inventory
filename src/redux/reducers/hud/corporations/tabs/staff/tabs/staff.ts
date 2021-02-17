import { StaffTabInitialStateInterface } from '../../../../../../../models/hud/corporations/tabs/staff/tabs/staffInterfaces';
import {
  STAFF_STAFF_ADD_TO_ROLE,
  STAFF_STAFF_CHANGE_PAGE,
  STAFF_STAFF_KICK,
  STAFF_STAFF_OPEN,
  STAFF_STAFF_REMOVE_FROM_ROLE,
} from '../../../../../../actions/hud/corporations/tabs/staff/tabs/staffTypes';
import { CORPORATIONS_STAFF_OPEN_TAB } from '../../../../../../actions/hud/corporations/tabs/staff/staffTypes';

const initialState: StaffTabInitialStateInterface = {
  currentPage: 1,
  pagesCount: 1,
  staff: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CORPORATIONS_STAFF_OPEN_TAB: {
      return initialState;
    }
    case STAFF_STAFF_OPEN: {
      return {
        ...state,
        ...action.tabData,
      };
    }
    case STAFF_STAFF_CHANGE_PAGE: {
      return {
        ...state,
        currentPage: action.pageNumber,
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
