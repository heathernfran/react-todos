import React from 'react'
import { connect } from 'react-redux'
import { editTodo } from './actions'

const EditForm = ({ dispatch, todoId }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    let editedText = e.target.todo.value
    dispatch(editTodo(todoId, editedText))
  }

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <input type="text" name="todo" />
      <button type="submit">update</button>
    </form>
  )
}

const ConnectedEditForm = connect()(EditForm)

export default ConnectedEditForm