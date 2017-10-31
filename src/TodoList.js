import React, { Component } from 'react';
import Form from './Form'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: ['Default todo']
    }
    this.allTodos = this.allTodos.bind(this)
  }

  allTodos(newTodo) {
    this.setState({ todos: [...this.state.todos, newTodo]})
  }

  render() {
    return (
      <div>
        <Form allTodos={this.allTodos} />
        {this.state.todos.map((todo) => {
          return <div>{todo}</div>
        })}
      </div>
    )
  }
}

export default TodoList