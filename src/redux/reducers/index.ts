import {combineReducers} from 'redux';
import boardReducer from './board';
import alertReducer from './alert';
import draggedItemReducer from './draggedItem';
import equippedItemsReducer from './equippedItems';

export default combineReducers({
  board: boardReducer,
  alert: alertReducer,
  draggedItem: draggedItemReducer,
  equippedItems: equippedItemsReducer,
});