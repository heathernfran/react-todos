import React from 'react'
import { connect } from 'react-redux'
import { editTodo } from '../actions'

const mapDispatchToProps = dispatch => ({
  handleSubmit(id, text) {
    dispatch(editTodo(id, text))
  }
})

const EditForm = ({ handleSubmit, todoId }) => (
  <form onSubmit={e => {
    e.preventDefault()
    handleSubmit(todoId, e.target.todo.value)
  }}>
    <input type="text" name="todo" />
    <button type="submit">update</button>
  </form>
)

const ConnectedEditForm = connect(
  null,
  mapDispatchToProps
)(EditForm)

export default ConnectedEditForm