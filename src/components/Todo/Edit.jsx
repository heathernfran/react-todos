import React from 'react'
import { connect } from 'react-redux'
import { func, string } from 'prop-types'
import { editTodo } from '../../actions'

const mapStateToProps = state => ({
  id: state.id,
  text: state.text,
  isEditing: state.isEditing
})
const mapDispatchToProps = dispatch => ({
  handleSubmit(id, text) {
    dispatch(editTodo(id, text))
  }
})

const Edit = ({ handleSubmit, todoId }) => (
  <form onSubmit={e => {
    e.preventDefault()
    handleSubmit(todoId, e.target.todo.value)
  }}>
    <input type="text" name="todo" />
    <button type="submit">update</button>
  </form>
)

Edit.propTypes = {
  handleSubmit: func.isRequired,
  todoId: string.isRequired
}

const ConnectedEdit = connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit)

export default ConnectedEdit