import React, { Component } from 'react';
import TodoListStateless from './TodoListStateless'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          Todos
        </header>
        <TodoListStateless />
      </div>
    );
  }
}

export default App;
