import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import todoApp from './reducers'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(todoApp)
console.log(store)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
