import { createStore, applyMiddleware } from 'redux';
// dev version
// import { composeWithDevTools } from 'redux-devtools-extension';
// prod version
// import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
// dev only version
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";
import rootReducer from './reducers';

const middleware = [thunk];

export default createStore(rootReducer, composeWithDevTools(
  applyMiddleware(...middleware)
));
