import React, { Component } from 'react'

class EditForm extends Component {
  editTodo(e) {
    e.preventDefault()
    let id = this.props.todoId
    let editedTodo = e.target.todo.value
    this.props.editedTodo(id, editedTodo)
  }

  render() {
    return (
      <form onSubmit={e => this.editTodo(e)}>
        <input type="text" name="todo" />
        <button type="submit">update</button>
      </form>
    )
  }
}

export default EditForm