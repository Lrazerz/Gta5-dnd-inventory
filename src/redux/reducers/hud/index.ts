import {combineReducers} from 'redux';
import phoneReducer from './phone';
import interactionsReducer from './interactions';
import corporationsReducer from './corporations';

export default combineReducers({
  phone: phoneReducer,
  interactions: interactionsReducer,
  corporations: corporationsReducer
});