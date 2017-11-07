import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'

const mapStateToProps = state => ({ todos: state.todos })

const TodoList = ({ todos }) => (
  <div>
    {todos.map(todo => (
      <Todo
        {...todo}
        key={todo.id}
      />
    ))}
  </div>
)

const ConnectedTodoList = connect(
  mapStateToProps
)(TodoList)

export default ConnectedTodoList