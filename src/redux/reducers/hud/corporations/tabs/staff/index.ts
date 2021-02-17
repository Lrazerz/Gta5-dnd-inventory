import { combineReducers } from 'redux';
import staffReducer from './staff';
import tabsReducer from './tabs';

export default combineReducers({
  staff: staffReducer,
  tabs: tabsReducer,
});
