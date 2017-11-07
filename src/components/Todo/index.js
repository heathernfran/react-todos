import React from 'react'
import { connect } from 'react-redux'
import { toggleEdit } from '../../actions'
import Delete from './Delete'
import Edit from './Edit'

const mapDispatchToProps = dispatch => ({
  handleClick(id, isEditing) {
    dispatch(toggleEdit(id, isEditing))
  }
})

const Todo = ({ handleClick, id, isEditing, text }) => (
  <div key={id}>
    <span>{text}</span>
    <Delete
      todoId={id}
    />
    {/* Toggle form for editing todos */}
    <button onClick={() => handleClick(id, isEditing)}>edit</button>
    {isEditing ?
      <Edit
        todoId={id}
      /> : null
    }
  </div>
)

const ConnectedTodo = connect(
  null, //mapStateToProps
  mapDispatchToProps
)(Todo)

export default ConnectedTodo