import {combineReducers} from 'redux';
import inventoryReducers from './inventory';
import hudReducers from './hud';

// +lawyer
export default combineReducers({
  hud: hudReducers,
  inventory: inventoryReducers,
})