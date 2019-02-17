// react libraries
import React, { Component } from 'react';

// third party libraries
import { Provider } from 'react-redux';

// store
import store from './store';

// components
import Home from './pages/Home'

// styles
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;
