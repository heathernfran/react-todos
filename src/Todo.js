import React from 'react'
import EditForm from './EditForm'

const Todo = ({ id, text, edit }) => {
  return (
    <div key={id}>
      <span>{text}</span>
      <button onClick={() => this.deleteTodo(id)}>delete</button>
      <button onClick={() => this.toggleEditable(id)}>edit</button>
      {/* Toggle form for editing todos */}
      {edit ? <EditForm todoId={id} editedTodo={this.editedTodo} /> : null}
    </div>
  )
}

export default Todo