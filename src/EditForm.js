import React from 'react'

const EditForm = (props) => {
  const {todoId, editedTodo} = props

  let editTodo = (e) => {
    e.preventDefault()
    let id = todoId
    let editedText = e.target.todo.value
    editedTodo(id, editedText)
  }

  return (
    <form onSubmit={e => editTodo(e)}>
      <input type="text" name="todo" />
      <button type="submit">update</button>
    </form>
  )
}

export default EditForm