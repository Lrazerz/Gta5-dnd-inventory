import {combineReducers} from 'redux';
import permissionsReducer from './permissions';
import treasuryReducer from './treasury/treasury';

export default combineReducers({
  permissions: permissionsReducer,
  treasury: treasuryReducer,
});