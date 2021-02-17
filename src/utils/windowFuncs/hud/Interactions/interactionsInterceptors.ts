import store from '../../../../redux/store';
import { setAllInteractionsAction, setIsOpenedInteractionsAction } from '../../../../redux/actions/hud/interactions';
import { SingleInteractionInterface } from '../../../../models/hud/InteractionInterfaces';
const dispatch = store.dispatch;

let windowOpenInteractions: (parsedDataValues: Array<any>) => void;
windowOpenInteractions = (parsedDataValues) => {
  // @ts-ignore
  dispatch(setAllInteractionsAction(parsedDataValues));
};

let windowCloseInteractions: () => void;
windowCloseInteractions = () => {
  dispatch(setIsOpenedInteractionsAction(false));
};

export { windowOpenInteractions, windowCloseInteractions };
