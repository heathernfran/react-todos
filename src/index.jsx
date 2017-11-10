import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoReducer from './todo/reducer'

import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={createStore(todoReducer)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
