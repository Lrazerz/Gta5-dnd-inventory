import {combineReducers} from 'redux';
import boardReducer from './board';
import draggedItemReducer from './draggedItem';
import equippedItemsReducer from './equippedItems';
import contextMenuReducer from './contextMenu';

export default combineReducers({
  board: boardReducer,
  draggedItem: draggedItemReducer,
  equippedItems: equippedItemsReducer,
  contextMenu: contextMenuReducer
});