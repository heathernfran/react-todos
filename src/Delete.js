import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from './actions'

const mapDispatchToProps = dispatch => ({
  handleClick(id) {
    dispatch(deleteTodo(id))
  }
})

const Delete = ({ handleClick, todoId }) => <button onClick={() => handleClick(todoId)}>delete</button>

const ConnectedDelete = connect(
  null,
  mapDispatchToProps
)(Delete)

export default ConnectedDelete