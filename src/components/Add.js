import React from 'react'
import uuidv4 from 'uuid/v4'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const mapDispatchToProps = dispatch => ({
  handleSubmit(id, text) {
    dispatch(addTodo(id, text))
  }
})

const Add = ({ handleSubmit }) => (
  <form onSubmit={e => {
    e.preventDefault()
    handleSubmit(uuidv4(), e.target.todo.value)
  }}>
    <input type="text" name="todo" />
    <button type="submit">+</button>
  </form>
)

const ConnectedAdd = connect(
  null,
  mapDispatchToProps
)(Add)

export default ConnectedAdd