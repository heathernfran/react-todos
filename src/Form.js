import React from 'react'
import uuidv4 from 'uuid/v4'
import { connect } from 'react-redux'
import { addTodo } from './actions'

const Form = ({ dispatch }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    let newTodo = e.target.todo.value
    let newId = uuidv4()
    dispatch(addTodo(newId, newTodo))
  }

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <input type="text" name="todo" />
      <button type="submit">+</button>
    </form>
  )
}

const ConnectedForm = connect()(Form)

export default ConnectedForm