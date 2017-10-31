import React, { Component } from 'react'

class Form extends Component {
  addTodo(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <input type="text" />
        <button onClick={(e) => this.addTodo(e)}>+</button>
      </div>
    )
  }
}

export default Form