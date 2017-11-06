import React, { Component } from 'react';
import Form from './Form'
import TodoListStateless from './TodoListStateless'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          Todos
        </header>
        <Form />
        <TodoListStateless />
      </div>
    );
  }
}

export default App;
