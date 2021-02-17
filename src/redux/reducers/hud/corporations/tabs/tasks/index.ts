import { combineReducers } from 'redux';
import tasksReducer from './tasks';
import tabsReducer from './tabs';

export default combineReducers({
  tasks: tasksReducer,
  tabs: tabsReducer,
});
