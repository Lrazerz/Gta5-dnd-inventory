import { CorporationsTasksInitialStateInterface } from '../../../../../../models/hud/corporations/tabs/tasks/tasksInterfaces';
import { CorporationsTasksTabsEnumEng } from '../../../../../../models/hud/corporations/tabs/tasks/tasksEnums';
import { CORPORATIONS_TASKS_OPEN_TAB } from '../../../../../actions/hud/corporations/tabs/tasks/tasksTypes';
import { CORPORATIONS_TAB_OPEN } from '../../../../../actions/hud/corporations/corporationsTypes';

const initialState: CorporationsTasksInitialStateInterface = {
  openedTab: CorporationsTasksTabsEnumEng.currentTasks,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CORPORATIONS_TAB_OPEN: {
      return initialState;
    }
    case CORPORATIONS_TASKS_OPEN_TAB: {
      return {
        ...state,
        openedTab: action.tab,
      };
    }
    default: {
      return state;
    }
  }
};
