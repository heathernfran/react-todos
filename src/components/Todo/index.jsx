import React from 'react'
import { connect } from 'react-redux'
import { bool, func, string } from 'prop-types'
import { toggleEdit } from '../../todo/actions'
import { getToggleEdit } from '../../todo/reducer'
import Delete from './Delete'
import Edit from './Edit'

const mapStateToProps = (state) => ({
  isEditing: getToggleEdit(state, state.id)
})

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

Todo.propTypes = {
  isEditing: bool.isRequired,
  handleClick: func.isRequired,
  id: string.isRequired,
  text: string.isRequired
}

const ConnectedTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)

export default ConnectedTodo