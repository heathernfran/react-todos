import React, { Component } from 'react'

class Form extends Component {
  addTodo(e) {
    e.preventDefault()
    let newTodo = e.target.todo.value
    this.props.allTodos(newTodo)
  }

  render() {
    return (
      <form onSubmit={e => this.addTodo(e)}>
        <input type="text" name="todo" />
        <button type="submit">+</button>
      </form>
    )
  }
}

export default Form