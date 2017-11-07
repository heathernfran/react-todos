import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from './actions'

const Delete = ({ dispatch, todoId }) => {
  const handleClick = () => dispatch(deleteTodo(todoId))

  return <button onClick={() => handleClick()}>delete</button>
}

const ConnectedDelete = connect()(Delete)

export default ConnectedDelete