import React, { Component } from 'react'
import Delete from './Delete'
import EditForm from './EditForm'

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      edit: false
    }
    this.closeEditForm = this.closeEditForm.bind(this)
  }

  toggleEditable() {
    this.setState(prevState => ({
      edit: !prevState.edit
    }))
  }

  closeEditForm() {
    this.setState({edit: false})
  }

  render() {
    return (
      <div key={this.props.id}>
        <span>{this.props.text}</span>
        <Delete
          todoId={this.props.id}
          deleteTodo={this.props.deleteTodo}
        />
        <button onClick={() => this.toggleEditable(this.props.id)}>edit</button>
        {/* Toggle form for editing todos */}
        {this.state.edit ?
          <EditForm
            todoId={this.props.id}
            editedTodo={this.props.editedTodo}
            closeEditForm={this.closeEditForm}
          /> : null}
      </div>
    )
  }
}

export default Todo