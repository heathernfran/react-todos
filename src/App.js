import React, { Component } from 'react';
import Form from './Form'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          Todos
        </header>
        <Form />
      </div>
    );
  }
}

export default App;
