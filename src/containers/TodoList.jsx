import React from 'react'
import { connect } from 'react-redux'
import { arrayOf, object } from 'prop-types'
import Todo from '../components/Todo'
import { getTodos } from '../todo/reducer'

const mapStateToProps = state => ({
  todos: getTodos(state)
})

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

TodoList.propTypes = {
  todos: arrayOf(object).isRequired
}

const ConnectedTodoList = connect(
  mapStateToProps
)(TodoList)

export default ConnectedTodoList