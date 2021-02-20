import {
  SingleStaffWorkerInterface,
  StaffTabInitialStateInterface,
} from '../../../../../../../models/hud/corporations/tabs/staff/tabs/staffInterfaces';
import {
  STAFF_STAFF_ADD_TO_ROLE,
  STAFF_STAFF_CHANGE_PAGE,
  STAFF_STAFF_KICK,
  STAFF_STAFF_OPEN,
  STAFF_STAFF_REMOVE_FROM_ROLE,
} from './staffTypes';
import {
  mpTrigger_corporations_staff_addToRole,
  mpTrigger_corporations_staff_changePage,
  mpTrigger_corporations_staff_kick,
  mpTrigger_corporations_staff_removeFromRole,
  mpTrigger_corporations_staff_setFilter,
} from '../../../../../../../utils/mpTriggers/hud/corporations/tabs/staff/tabs/staffTriggers';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootStoreInterface } from '../../../../../../store';

const staffOpenStaffTabAction = (tabData: StaffTabInitialStateInterface) => {
  return { type: STAFF_STAFF_OPEN, tabData };
};

const staffChangePageAction = (
  pageNumber: number,
  lastMember: SingleStaffWorkerInterface,
): ThunkAction<void, RootStoreInterface, unknown, Action<string>> => {
  return (dispatch) => {
    dispatch({ type: STAFF_STAFF_CHANGE_PAGE, pageNumber });
    mpTrigger_corporations_staff_changePage(pageNumber, lastMember);
  };
};

const staffOpenStaffTabPageAction = (
  tabData: StaffTabInitialStateInterface,
): ThunkAction<void, RootStoreInterface, unknown, Action<string>> => {
  return (dispatch, getState) => {
    const currentPage = getState().hud.corporations.tabs.staff.tabs.staff.currentPage;
    if (currentPage !== tabData.currentPage) {
      return;
    }
    dispatch(staffOpenStaffTabAction(tabData));
  };
};

const staffSetFilterAction = (text: string) => {
  mpTrigger_corporations_staff_setFilter(text);
};

const staffRemoveFromRoleAction = (
  playerNickname: string,
  roleTitle: string,
): ThunkAction<void, RootStoreInterface, unknown, Action<string>> => {
  return (dispatch) => {
    dispatch({ type: STAFF_STAFF_REMOVE_FROM_ROLE, playerNickname, roleTitle });
    mpTrigger_corporations_staff_removeFromRole(playerNickname, roleTitle);
  };
};

const staffAddToRoleAction = (
  playerNickname: string,
  roleTitle: string,
): ThunkAction<void, RootStoreInterface, unknown, Action<string>> => {
  return (dispatch) => {
    dispatch({ type: STAFF_STAFF_ADD_TO_ROLE, playerNickname, roleTitle });
    mpTrigger_corporations_staff_addToRole(playerNickname, roleTitle);
  };
};

const staffKickAction = (playerNickname: string): ThunkAction<void, RootStoreInterface, unknown, Action<string>> => {
  return (dispatch) => {
    dispatch({ type: STAFF_STAFF_KICK, playerNickname });
    mpTrigger_corporations_staff_kick(playerNickname);
  };
};

export {
  staffOpenStaffTabAction,
  staffChangePageAction,
  staffOpenStaffTabPageAction,
  staffSetFilterAction,
  staffRemoveFromRoleAction,
  staffAddToRoleAction,
  staffKickAction,
};
