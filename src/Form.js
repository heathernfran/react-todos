import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from './actions'

const Form = ({ dispatch }) => {
  const handleSubmit = (e) => {
    console.log(e)
    e.preventDefault()
    let newTodo = e.target.todo.value
    dispatch(addTodo(newTodo))
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