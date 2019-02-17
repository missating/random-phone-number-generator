// react libraries
import React from 'react';

// third party packages
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';

// components
import App from './App';

// styles
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
