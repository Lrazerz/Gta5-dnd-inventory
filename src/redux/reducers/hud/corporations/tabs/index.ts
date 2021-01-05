import {combineReducers} from 'redux';
import permissionsReducer from './permissions';

export default combineReducers({
  permissions: permissionsReducer
});