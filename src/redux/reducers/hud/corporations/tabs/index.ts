import { combineReducers } from 'redux';
import permissionsReducer from './permissions';
import treasuryReducer from './treasury/treasury';
import logsReducer from './logs/logs';
import tasksReducer from './tasks';
import staffReducer from './staff';

export default combineReducers({
  permissions: permissionsReducer,
  treasury: treasuryReducer,
  logs: logsReducer,
  tasks: tasksReducer,
  staff: staffReducer,
});
