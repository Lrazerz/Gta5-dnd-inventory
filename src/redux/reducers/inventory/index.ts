import { combineReducers } from 'redux';
import boardReducer from './board';
import externalBoardReducer from './externalBoard';
import draggedItemReducer from './draggedItem';
import equippedItemsReducer from './equippedItems';
import contextMenuReducer from './contextMenu';
import hoveredItemReducer from './hoveredItem';

export default combineReducers({
  board: boardReducer,
  externalBoard: externalBoardReducer,
  draggedItem: draggedItemReducer,
  equippedItems: equippedItemsReducer,
  contextMenu: contextMenuReducer,
  hoveredItem: hoveredItemReducer,
});
