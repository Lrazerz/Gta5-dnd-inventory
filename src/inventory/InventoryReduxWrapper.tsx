import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store';
import reducer from './redux/reducers';

class InventoryReduxWrapper extends React.Component<any, any> {
  private store: any;

  constructor(props) {
    super(props)
    this.store = store;
  }

  render() {
    return (
      <Provider store={this.store}>
        {this.props.children}
      </Provider>
    );
  }
}

export default InventoryReduxWrapper;