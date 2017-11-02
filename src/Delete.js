import React from 'react'

const Delete = ({ todoId, deleteTodo }) => {
  const deletingTodo = () => {
    deleteTodo(todoId)
  }

  return (
    <button onClick={() => deletingTodo()}>delete</button>
  )
}

export default Delete