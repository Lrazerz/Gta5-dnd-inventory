import {CONTEXT_MENU_OPEN, CONTEXT_MENU_CLOSE} from "./types";
import {translateToServerItem} from "../../utils/translateToServerItem";
import {ItemTypes} from "../../constants/dnd/types";
import {removeEquippedWeaponFromBoard, removeItem} from "./board";
import {removeEquippedItem, removeEquippedWeaponFromEquipped} from "./equippedItems";
import {ContextAction} from "../../models/Context/ContextAction";
import store from "../store";
const {dispatch} = store;

const mpTriggerDropItem = (item) => {
  const translatedItem = translateToServerItem(item);
  try {
    //@ts-ignore
    mp.trigger('cef_cl_dropItem', translatedItem);
  } catch(e) {}
}

const _eatFoodHandler = (item) => {
  console.log('food ', item, ' was eaten');
}

const _removeBoardItemHandler = (item) => {
  const {category, id, mainCell} = item;
  // тут еще чекать если оружие, то удалить с доски его тоже
  if(category === ItemTypes.WEAPON_RIFLE || category === ItemTypes.WEAPON_PISTOL
    || category === ItemTypes.WEAPON_LAUNCHER) {
    // if item is weapon remove transparent weapon from equipped too
    // @ts-ignore AnyAction, but I use redux-thunk
    dispatch(removeEquippedWeaponFromEquipped(id));
  }
  // @ts-ignore
  dispatch(removeItem(mainCell, item.width, item.height));
}

const _removeEquippedItemHandler = (item) => {
  const {category, id, mainCell} = item;
  // тут еще чекать если оружие, то удалить с доски его тоже
  if(category === ItemTypes.WEAPON_RIFLE || category === ItemTypes.WEAPON_PISTOL
    || category === ItemTypes.WEAPON_LAUNCHER) {
    // if item is weapon remove transparent weapon from board too
    // @ts-ignore AnyAction, but I use redux-thunk
    dispatch(removeEquippedWeaponFromBoard(id));
  }
  // @ts-ignore
  dispatch(removeEquippedItem(mainCell));
}

// returns function to invoke when drop action selected
const _dropItemHandler = (removeItemFunc, item) => () => {
  dispatch(_closeContextMenu());
  removeItemFunc(item);
  mpTriggerDropItem(item);
}

// build list of actions and bind handlers
const getContextActionsForCell = (item) => {
  const contextActions: ContextAction[] = [];
  if(typeof item.mainCell === 'object') {
    // if item from board
    switch(item.category) {
      case ItemTypes.EAT: {
        contextActions.push(new ContextAction('Съесть', _dropItemHandler(_eatFoodHandler, item)))
      }
    }
    contextActions.push(new ContextAction('Выкинуть', _dropItemHandler(_removeBoardItemHandler, item)));
  } else {
    // item from equipped items
    contextActions.push(new ContextAction('Выкинуть', _dropItemHandler(_removeEquippedItemHandler, item)));
  }
  return contextActions;
}

const _openContextMenu = (item, leftOffset, topOffset) => {
  return {type: CONTEXT_MENU_OPEN, item, leftOffset, topOffset};
};

const _closeContextMenu = () => {
  return {type: CONTEXT_MENU_CLOSE};
};

const openContextMenu = (item, leftOffset, topOffset) => {
  return dispatch => {
    dispatch(_openContextMenu(item, leftOffset, topOffset));
  }
}

const closeContextMenu = () => {
  return dispatch => {
    dispatch(_closeContextMenu())
  }
}

export {
  mpTriggerDropItem,
  openContextMenu,
  closeContextMenu,
  getContextActionsForCell
}