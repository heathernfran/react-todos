import React from 'react'
import { connect } from 'react-redux'
import TodoStateless from './TodoStateless'

const mapStateToProps = state => ({ todos: state.todos })

const TodoListStateless = ({ todos }) => (
  <div>
    {todos.map(todo => (
      <TodoStateless
        {...todo}
        key={todo.id}
      />
    ))}
  </div>
)

const ConnectedTodoList = connect(
  mapStateToProps
)(TodoListStateless)

export default ConnectedTodoList