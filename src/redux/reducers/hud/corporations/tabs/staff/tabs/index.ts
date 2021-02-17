import { combineReducers } from 'redux';
import staffTabReducer from './staff';

export default combineReducers({
  staff: staffTabReducer,
});
