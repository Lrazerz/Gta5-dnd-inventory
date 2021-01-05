import {CORPORATIONS_CLOSE, CORPORATIONS_OPEN, CORPORATIONS_TAB_OPEN} from "./corporationsTypes";
import {CorporationsTabsEnum} from "../../../../hud/models/corporations/enums";

// todo maybe main screen data too
const corporationsOpen = () => {
  return {type: CORPORATIONS_OPEN};
}

const corporationsClose = () => {
  return {type: CORPORATIONS_CLOSE};
}

const corporationsTabOpen = (openedTab: CorporationsTabsEnum) => {
  return {type: CORPORATIONS_TAB_OPEN, openedTab};
}

export {
  corporationsOpen,
  corporationsClose,
  corporationsTabOpen
}