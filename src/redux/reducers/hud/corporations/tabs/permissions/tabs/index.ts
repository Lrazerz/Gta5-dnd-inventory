import {combineReducers} from 'redux';
import autoReducer from './auto';

export default combineReducers({
  auto: autoReducer,
});