import {combineReducers} from 'redux';
import boardReducer from './board';
import draggedItemReducer from './draggedItem';
import equippedItemsReducer from './equippedItems';

export default combineReducers({
  board: boardReducer,
  draggedItem: draggedItemReducer,
  equippedItems: equippedItemsReducer,
});