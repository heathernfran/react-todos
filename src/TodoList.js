import React, { Component } from 'react';
import uuidv4 from 'uuid/v4'
import Form from './Form'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {id: uuidv4(), text: 'Default todo', delete: false}
      ]
    }
    this.allTodos = this.allTodos.bind(this)
  }

  allTodos(newTodo) {
    this.setState({ todos: [...this.state.todos, { id: uuidv4(), text: newTodo }] })
  }

  deleteTodo(todo, id) {
    console.log(todo, id)
  }

  render() {
    return (
      <div>
        <Form allTodos={this.allTodos} />
        {this.state.todos.map((todo) => {
          return (
            <div key={todo.id}>
              <span>{todo.text}</span>
              <button onClick={() => this.deleteTodo(todo.text, todo.id)}>delete</button>
            </div>
          )
        })}
      </div>
    )
  }
}

export default TodoList