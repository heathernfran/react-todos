import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: ['Default todo']
    }
  }

  render() {
    return (
      this.state.todos.map((todo) => {
        return <div>{todo}</div>
      })
    )
  }
}

export default TodoList