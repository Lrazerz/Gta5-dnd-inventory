import {
  CORPORATIONS_CLOSE,
  CORPORATIONS_OPEN,
  CORPORATIONS_TAB_OPEN,
  CORPORATIONS_SET_LOADING,
} from './corporationsTypes';
import { CorporationsTabsEnum } from '../../../../models/hud/corporations/enums';

// todo maybe main screen data too
const corporationsOpenAction = () => {
  return { type: CORPORATIONS_OPEN };
};

const corporationsCloseAction = () => {
  return { type: CORPORATIONS_CLOSE };
};

const corporationsTabOpen = (openedTab: CorporationsTabsEnum) => {
  return { type: CORPORATIONS_TAB_OPEN, openedTab };
};

export { corporationsOpenAction, corporationsCloseAction, corporationsTabOpen };
