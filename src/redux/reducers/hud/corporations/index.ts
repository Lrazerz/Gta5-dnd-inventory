import { combineReducers } from 'redux';
import corporationsReducer from './corporations';
import tabsReducers from './tabs';

export default combineReducers({
  corporations: corporationsReducer,
  tabs: tabsReducers,
});
