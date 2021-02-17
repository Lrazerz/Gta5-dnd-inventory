import { combineReducers } from 'redux';
import inventoryReducers from './inventory';
import hudReducers from './hud';
import alertReducer from './alert/alert';

// +lawyer
export default combineReducers({
  hud: hudReducers,
  inventory: inventoryReducers,
  alert: alertReducer,
});
