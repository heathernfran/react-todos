import React from 'react';
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
