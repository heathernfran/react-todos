import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import Add from '../components/Add'
import TodoList from './TodoList'
import './App.scss';

const App = () => (
  <div className="App">
    <header>
      Todos
    </header>
    <Add />
    <TodoList />
  </div>
)

export default App;
