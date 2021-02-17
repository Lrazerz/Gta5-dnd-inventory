import { combineReducers } from 'redux';
import autoReducer from './auto';
import propertyReducers from './property';

export default combineReducers({
  auto: autoReducer,
  property: propertyReducers,
});
