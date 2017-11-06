import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from './actions'

const Delete = ({ dispatch, todoId }) => {
  const deletingTodo = () => dispatch(deleteTodo(todoId))

  return <button onClick={() => deletingTodo()}>delete</button>
}

const ConnectedDelete = connect()(Delete)

export default ConnectedDelete