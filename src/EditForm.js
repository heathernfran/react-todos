import React from 'react'

const EditForm = ({ todoId, editedTodo }) => {
  const editTodo = (e) => {
    e.preventDefault()
    let editedText = e.target.todo.value
    editedTodo(todoId, editedText)
  }

  return (
    <form onSubmit={e => editTodo(e)}>
      <input type="text" name="todo" />
      <button type="submit">update</button>
    </form>
  )
}

export default EditForm