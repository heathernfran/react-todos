import _ from 'lodash'
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
    // Look for the the todo that should be deleted.
    let deleteTodo = _.findIndex(this.state.todos, o => o.id === todo.id)

    let updatedTodoState = this.state.todos.filter(todo => todo.id != id)
    this.setState({ todos: updatedTodoState })
  }

  render() {
    return (
      <div>
        <Form allTodos={this.allTodos} />
        {this.state.todos.map((todo) => {
          return (
            <div key={todo.id}>
              <span>{todo.text}</span>
              <button onClick={() => this.deleteTodo(todo, todo.id)}>delete</button>
            </div>
          )
        })}
      </div>
    )
  }
}

export default TodoList