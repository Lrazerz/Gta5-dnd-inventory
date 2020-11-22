import {CONTEXT_MENU_OPEN, CONTEXT_MENU_CLOSE, CONTEXT_MENU_SPLIT_OPEN} from "./types";
import {ItemTypes} from "../../../inventory/constants/dnd/types";
import {removeItemFromBoard, removeItem} from "./board";
import {removeEquippedItem, removeEquippedWeaponFromEquipped} from "./equippedItems";
import {ContextAction} from "../../../inventory/models/Context/ContextAction";
import store from "../../store";
import {removeExternalBoardItem} from "./externalBoard";
import {mpTriggerDropExternalItem, mpTriggerDropItem} from "../../../inventory/utils/mpTriggers";
const {dispatch} = store;

const _openContextMenu = (item, hoveredArea, leftOffset, topOffset, topOffsetTopContext) => {
  return {type: CONTEXT_MENU_OPEN, item, hoveredArea, leftOffset, topOffset, topOffsetTopContext}
};

const _openRangeComponent = () => {
  return {type: CONTEXT_MENU_SPLIT_OPEN}
}

const _closeContextMenu = () => {
  return {type: CONTEXT_MENU_CLOSE};
};

// rect - getBoundingClientRect() - computed styles
const openContextMenu = (item, rect, hoveredArea) => {
  return dispatch => {
    // offsets from left screen angle to positioning items
    let averX, bottomContext, topContext;

    if(hoveredArea === 3) {
      averX = item.mainCell === 1 || item.mainCell === 2 || item.mainCell === 3 ? rect.left + rect.width / 3
        // @ts-ignore
        : rect.left - rect.width/ 1.18;

      averX = Math.floor(averX);
      bottomContext = Math.floor(rect.top + rect.height * 0.935);
      topContext = Math.floor(rect.top + rect.height * 0.065);
    }
    else {
      const singleSquareWidth = rect.width / item.width;

      averX = Math.floor(rect.left + item.width * singleSquareWidth / 2) - 0.783 * singleSquareWidth;
      bottomContext = Math.floor(rect.top + rect.height * 0.935);
      topContext = Math.floor(rect.top + rect.height * 0.065)
    }

    dispatch(_openContextMenu(item, hoveredArea, averX, bottomContext, topContext));
  }
}

const closeContextMenu = () => {
  return dispatch => {
    dispatch(_closeContextMenu())
  }
}

const _eatFoodHandler = (item) => {
  console.log('food ', item, ' was eaten');
}

const _removeBoardItemHandler = (item) => {
  const {category, id, mainCell, width, height} = item;

  if(category === ItemTypes.WEAPON_RIFLE || category === ItemTypes.WEAPON_PISTOL
    || category === ItemTypes.WEAPON_LAUNCHER) {
    // if item is weapon remove transparent weapon from equipped too
    // @ts-ignore AnyAction, but I use redux-thunk
    dispatch(removeEquippedWeaponFromEquipped(id));
  }
  // @ts-ignore
  dispatch(removeItem(mainCell, width, height));
  mpTriggerDropItem(item);
}

const _removeExternalBoardItemHandler = (item) => {
  const {width, height, mainCell} = item;
  // @ts-ignore
  dispatch(removeExternalBoardItem(mainCell, width, height));
  mpTriggerDropExternalItem(item);
}

const _removeEquippedItemHandler = (item) => {
  const {category, id, mainCell} = item;
  // тут еще чекать если оружие, то удалить с доски его тоже
  if(category === ItemTypes.WEAPON_RIFLE || category === ItemTypes.WEAPON_PISTOL
    || category === ItemTypes.WEAPON_LAUNCHER) {
    // if item is weapon remove transparent weapon from board too
    // @ts-ignore AnyAction, but I use redux-thunk
    dispatch(removeItemFromBoard(id));
  }
  // @ts-ignore
  dispatch(removeEquippedItem(mainCell));
  mpTriggerDropItem(item);
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
const getContextActionsForCell = (item, hoveredArea) => {
  const contextActions: ContextAction[] = [];

  if(item.currentCount && item.maxCount && item.currentCount > 1) {
    contextActions.push(new ContextAction('Разделить', _openRangeComponentHandler))
  }

  if(hoveredArea === 1 || hoveredArea === 2) {
    // if item from board
    switch(item.category) {
      case ItemTypes.EAT: {
        contextActions.push(new ContextAction('Съесть', _dropItemHandler(_eatFoodHandler, item)))
      }
    }
    if(hoveredArea === 1) {
      contextActions.push(new ContextAction('Выкинуть', _dropItemHandler(_removeBoardItemHandler, item)));
    } else if (hoveredArea === 2) {
      contextActions.push(new ContextAction('Выкинуть', _dropItemHandler(_removeExternalBoardItemHandler, item)));
    }
  } else if (hoveredArea === 3) {
    // item from equipped items
    contextActions.push(new ContextAction('Выкинуть', _dropItemHandler(_removeEquippedItemHandler, item)));
  }
  return contextActions;
}

export {
  openContextMenu,
  closeContextMenu,
  getContextActionsForCell
}