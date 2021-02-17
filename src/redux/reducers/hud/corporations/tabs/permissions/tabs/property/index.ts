import { combineReducers } from 'redux';
import propertyReducer from './property';
import tabsReducers from './tabs';

export default combineReducers({
  property: propertyReducer,
  tabs: tabsReducers,
});
