import React, { Component } from 'react';
import Form from './Form'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {text: 'Default todo', delete: false}
      ]
    }
    this.allTodos = this.allTodos.bind(this)
  }

  allTodos(newTodo) {
    this.setState({ todos: [...this.state.todos, { text: newTodo }] })
  }

  render() {
    return (
      <div>
        <Form allTodos={this.allTodos} />
        {this.state.todos.map((todo) => {
          return (
            <div>
              <span>{todo.text}</span>
              <button>delete</button>
            </div>
          )
        })}
      </div>
    )
  }
}

export default TodoList