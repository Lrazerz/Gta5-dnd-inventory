import {combineReducers} from 'redux';
import phoneReducer from './phone';

export default combineReducers({
  phone: phoneReducer,
});