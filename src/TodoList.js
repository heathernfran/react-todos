import React, { Component } from 'react';
import uuidv4 from 'uuid/v4'
import Form from './Form'
import Todo from './Todo'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {id: uuidv4(), text: 'Default todo', edit: false}
      ],
    }
    this.allTodos = this.allTodos.bind(this)
    this.editedTodo = this.editedTodo.bind(this)
  }

  allTodos(newTodo) {
    this.setState({ todos: [...this.state.todos, { id: uuidv4(), text: newTodo, edit: false }] })
  }

  deleteTodo(id) {
    // Look for the the todo that should be deleted, return all other todos.
    let updatedTodoState = this.state.todos.filter(todo => todo.id !== id)
    this.setState({ todos: updatedTodoState })
  }

  editedTodo(id, text) {
    let editableTodos = [...this.state.todos]
    let currentTodo = editableTodos.find(todo => todo.id === id)
    currentTodo.text = text
    currentTodo.edit = false
    this.setState({ todos: editableTodos })
  }

  toggleEditable(id) {
    let editableTodos = [...this.state.todos]
    let currentTodo = editableTodos.find(todo => todo.id === id)

    // ES7
    let editedTodo = {...currentTodo, edit: true} //Object.assign({}, currentTodo, {edit: true})
    currentTodo.edit = true
    this.setState({ todos: editableTodos})
  }

  render() {
    return (
      <div>
        <Form allTodos={this.allTodos} />
        {this.state.todos.map((todo) => {
          return (
            <Todo key={todo.id} {...todo} />
          )
        })}
      </div>
    )
  }
}

export default TodoList