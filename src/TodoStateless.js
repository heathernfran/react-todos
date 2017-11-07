import React from 'react'
import { connect } from 'react-redux'
import { toggleEdit } from './actions'
import Delete from './Delete'
import EditForm from './EditForm'

const TodoStateless = ({ dispatch, id, isEditing, text }) => {
  const handleClick = () => dispatch(toggleEdit(id, isEditing))

  return (
    <div key={id}>
      <span>{text}</span>
      <Delete
        todoId={id}
      />
      {/* Toggle form for editing todos */}
      <button onClick={() => handleClick(id)}>edit</button>
      {isEditing ?
        <EditForm
          todoId={id}
        /> : null
      }
    </div>
  )
}

const ConnectedTodoStateless = connect()(TodoStateless)

export default ConnectedTodoStateless