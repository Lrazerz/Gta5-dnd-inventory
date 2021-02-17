import { combineReducers } from 'redux';
import permissionsReducer from './permissions';
import tabsReducer from './tabs';

export default combineReducers({
  permissions: permissionsReducer,
  tabs: tabsReducer,
});
