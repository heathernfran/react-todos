import React from 'react'

const Form = ({allTodos}) => {
  const addTodo = (e) => {
    e.preventDefault()
    let newTodo = e.target.todo.value
    allTodos(newTodo)
  }

  return (
    <form onSubmit={e => addTodo(e)}>
      <input type="text" name="todo" />
      <button type="submit">+</button>
    </form>
  )
}

export default Form