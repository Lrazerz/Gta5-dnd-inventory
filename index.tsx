import React from 'react';
import ReactDOM from 'react-dom';
import './src/inventory/styles/normalize.css';
import './index.scss';
import App from "./src/App";

//fonts
// import './src/assets/fonts/Montserrat-Bold.ttf';
// import './src/assets/fonts/Montserrat-SemiBold.ttf';
// import './src/assets/fonts/Montserrat-Regular.ttf';
import './src/assets/inventory/fonts/Montserrat-Light.ttf';
// import './src/assets/fonts/Montserrat-Thin.ttf';

// import './src/assets/fonts/BebasNeue-Regular.ttf';
import './src/assets/inventory/fonts/BebasNeue-Bold.otf';

ReactDOM.render(
  <App/>,
  document.getElementById('root'));