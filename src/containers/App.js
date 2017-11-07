import React, { Component } from 'react';
import Form from '../components/Form'
import TodoList from './TodoList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          Todos
        </header>
        <Form />
        <TodoList />
      </div>
    );
  }
}

export default App;
