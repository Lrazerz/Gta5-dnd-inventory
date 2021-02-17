import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
// dev only version
// import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = [thunk];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

interface RootStoreInterface {
  inventory: any;
  hud: any;
}

export { RootStoreInterface };

export default store;
