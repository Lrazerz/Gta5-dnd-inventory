import {CONTEXT_MENU_OPEN, CONTEXT_MENU_CLOSE, CONTEXT_MENU_SPLIT_OPEN} from "./types";
import {translateToServerItem} from "../../utils/translateToServerItem";
import {ItemTypes} from "../../constants/dnd/types";
import {removeEquippedWeaponFromBoard, removeItem} from "./board";
import {removeEquippedItem, removeEquippedWeaponFromEquipped} from "./equippedItems";
import {ContextAction} from "../../models/Context/ContextAction";
import store from "../store";
const {dispatch} = store;

const _openContextMenu = (item, leftOffset, topOffset, topOffsetTopContext) => {
  return {type: CONTEXT_MENU_OPEN, item, leftOffset, topOffset, topOffsetTopContext}
};

const _openRangeComponent = () => {
  return {type: CONTEXT_MENU_SPLIT_OPEN}
}

const _closeContextMenu = () => {
  return {type: CONTEXT_MENU_CLOSE};
};

// rect - getBoundingClientRect() - computed styles
const openContextMenu = (item, rect) => {
  return dispatch => {
    // offsets from left screen angle to positioning items
    let averX, bottomContext, topContext;

    if(item.isEquipped) {
      averX = item.mainCell === 1 || item.mainCell === 2 || item.mainCell === 3 ? rect.left + rect.width / 3
        // @ts-ignore
        : rect.left - rect.width/ 1.18;

      averX = Math.floor(averX);
      bottomContext = Math.floor(rect.top + rect.height * 0.935);
      topContext = Math.floor(rect.top + rect.height * 0.065)
    }
    else {
      averX = Math.floor(rect.left + (item.width - 2) * rect.width / item.width / 2);
      bottomContext = Math.floor(rect.top + rect.height * 0.935);
      topContext = Math.floor(rect.top + rect.height * 0.065)
    }

    dispatch(_openContextMenu(item, averX, bottomContext, topContext));
  }
}

const closeContextMenu = () => {
  return dispatch => {
    dispatch(_closeContextMenu())
  }
}

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

// add action _openRangeComponent to split item (dispatch...)
const _openRangeComponentHandler = () => {
  dispatch(_openRangeComponent());
}

// build list of actions and bind handlers
const getContextActionsForCell = (item) => {
  const contextActions: ContextAction[] = [];

  if(item.currentCount && item.maxCount && item.currentCount > 1) {
    contextActions.push(new ContextAction('Разделить', _openRangeComponentHandler))
  }

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

export {
  mpTriggerDropItem,
  openContextMenu,
  closeContextMenu,
  getContextActionsForCell
}