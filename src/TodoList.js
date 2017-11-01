import React, { Component } from 'react';
import uuidv4 from 'uuid/v4'
import EditForm from './EditForm'
import Form from './Form'

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
    currentTodo.edit = true
    this.setState({ todos: editableTodos })
  }

  render() {
    return (
      <div>
        <Form allTodos={this.allTodos} />
        {this.state.todos.map((todo) => {
          return (
            <div key={todo.id}>
              <span>{todo.text}</span>
              <button onClick={() => this.deleteTodo(todo.id)}>delete</button>
              <button onClick={() => this.toggleEditable(todo.id)}>edit</button>
              {/* Toggle form for editing todos */}
              {todo.edit ? <EditForm todoId={todo.id} editedTodo={this.editedTodo} /> : null}
            </div>
          )
        })}
      </div>
    )
  }
}

export default TodoList