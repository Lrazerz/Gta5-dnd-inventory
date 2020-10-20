import {HOVERED_ITEM_ADD, HOVERED_ITEM_REMOVE} from "./types";

const _addHoveredItem = (item) => {
  return {type: HOVERED_ITEM_ADD, item}
}

const _removeHoveredItem = () => {
  return {type: HOVERED_ITEM_REMOVE}
}

const addHoveredItem = (item) => {
  return dispatch => {
    dispatch(_addHoveredItem(item));
  }
}

const removeHoveredItem = () => {
  return dispatch => {
    dispatch(_removeHoveredItem());
  }
}

export {addHoveredItem, removeHoveredItem}