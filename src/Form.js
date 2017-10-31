import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
  }

  addTodo(e) {
    e.preventDefault()
    let newTodo = e.target.todo.value
    this.props.allTodos(newTodo)
  }

  handleChange(e) {
    this.setState({ value: e.target.value})
  }

  render() {
    return (
      <form onSubmit={(e) => this.addTodo(e)}>
        <input type="text" name="todo" value={this.state.value} onChange={(e) => this.handleChange(e)} />
        <button type="submit">+</button>
      </form>
    )
  }
}

export default Form