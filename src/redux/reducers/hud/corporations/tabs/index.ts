import {combineReducers} from 'redux';
import permissionsReducer from './permissions';
import treasuryReducer from './treasury/treasury';
import logsReducer from './logs/logs';

export default combineReducers({
  permissions: permissionsReducer,
  treasury: treasuryReducer,
  logs: logsReducer
});