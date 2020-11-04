import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './src/inventory/redux/store';
import './src/inventory/styles/normalize.css';
import './index.scss';
import InventoryApp from "./src/App";

//fonts
// import './src/assets/fonts/Montserrat-Bold.ttf';
// import './src/assets/fonts/Montserrat-SemiBold.ttf';
// import './src/assets/fonts/Montserrat-Regular.ttf';
import './src/inventory/assets/fonts/Montserrat-Light.ttf';
// import './src/assets/fonts/Montserrat-Thin.ttf';

// import './src/assets/fonts/BebasNeue-Regular.ttf';
import './src/inventory/assets/fonts/BebasNeue-Bold.otf';

ReactDOM.render(
  <Provider store={store}>
    <InventoryApp/>
  </Provider>,
  document.getElementById('root'));