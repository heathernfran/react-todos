import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import {
  addTodo,
  deleteTodo,
  editTodo,
  toggleEdit
} from './actions'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(todoApp)

// Testing store logic
console.log(store)
console.log(store.getState())
store.dispatch(addTodo('2', 'another todo'))
// store.dispatch(toggleEdit(true))
store.dispatch(editTodo('1', 'test editing'))
store.dispatch(deleteTodo('2'))
console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
