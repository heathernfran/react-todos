import React from 'react'
import { connect } from 'react-redux'
import Delete from './Delete'
import EditForm from './EditForm'

const TodoStateless = ({ id, isEditable, text }) => (
  <div key={id}>
    <span>{text}</span>
    <Delete
      todoId={id}
    />
    {/* Toggle form for editing todos */}
    <EditForm
      todoId={id}
    />
  </div>
)

const ConnectedTodoStateless = connect()(TodoStateless)

export default ConnectedTodoStateless