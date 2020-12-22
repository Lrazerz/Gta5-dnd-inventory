import {combineReducers} from 'redux';
import phoneReducer from './phone';
import interactionsReducer from './interactions';

export default combineReducers({
  phone: phoneReducer,
  interactions: interactionsReducer
});