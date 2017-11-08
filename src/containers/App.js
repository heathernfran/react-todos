import React, { Component } from 'react';
import Add from '../components/Add'
import TodoList from './TodoList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          Todos
        </header>
        <Add />
        <TodoList />
      </div>
    );
  }
}

export default App;
