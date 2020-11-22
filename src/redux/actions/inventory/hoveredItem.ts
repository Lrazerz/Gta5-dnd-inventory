import {HOVERED_ITEM_ADD, HOVERED_ITEM_REMOVE} from "./types";

const _addHoveredItem = (item, hoveredArea) => {
  return {type: HOVERED_ITEM_ADD, item, hoveredArea}
}

const _removeHoveredItem = () => {
  return {type: HOVERED_ITEM_REMOVE}
}

const addHoveredItem = (item, hoveredArea) => {
  return dispatch => {
    dispatch(_addHoveredItem(item, hoveredArea));
  }
}

const removeHoveredItem = () => {
  return dispatch => {
    dispatch(_removeHoveredItem());
  }
}

export {addHoveredItem, removeHoveredItem}