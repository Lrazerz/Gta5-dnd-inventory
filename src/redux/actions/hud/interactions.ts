import {SET_ALL_INTERACTIONS, SET_IS_OPENED_INTERACTIONS} from "./interactionTypes";
import {SingleInteractionInterface} from "../../../hud/components/Interactions/models/interfaces/interactionInterfaces";

// for now only for close
const setIsOpenedInteractionsAction = (isOpened) => {
  return {type: SET_IS_OPENED_INTERACTIONS, isOpened}
}
// set all interactions from server, in redux also opens interactions (isOpened = true)
const setAllInteractionsAction = (interactions: SingleInteractionInterface[]) => {
  return {type: SET_ALL_INTERACTIONS, interactions};
}

export {
  setIsOpenedInteractionsAction,
  setAllInteractionsAction
}