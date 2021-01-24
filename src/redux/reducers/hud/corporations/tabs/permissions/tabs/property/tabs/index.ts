import {combineReducers} from 'redux';
import officeReducer from './office';

export default combineReducers({
  office: officeReducer,
});