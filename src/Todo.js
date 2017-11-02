import React, { Component } from 'react'
import EditForm from './EditForm'

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      edit: false
    }
  }

  toggleEditable() {
    this.setState(prevState => ({
      edit: !prevState.edit
    }))
  }

  render() {
    return (
      <div key={this.props.id}>
        <span>{this.props.text}</span>
        <button onClick={() => this.deleteTodoProp(this.props.id)}>delete</button>
        <button onClick={() => this.toggleEditable(this.props.id)}>edit</button>
        {/* Toggle form for editing todos */}
        {this.state.edit ? <EditForm todoId={this.props.id} editedTodo={this.props.editedTodo} /> : null}
      </div>
    )
  }
}

export default Todo