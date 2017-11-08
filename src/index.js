import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import app from './reducers'

import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={createStore(app)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
