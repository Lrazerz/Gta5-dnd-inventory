import {combineReducers} from 'redux';
import currentReducer from './currentTasks';
import newReducer from './newTask';
import archiveReducer from './archiveTasks';

export default combineReducers({
  current: currentReducer,
  new: newReducer,
  archive: archiveReducer
})

