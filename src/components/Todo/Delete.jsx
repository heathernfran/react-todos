import React from 'react'
import { connect } from 'react-redux'
import { func, string } from 'prop-types'
import { deleteTodo } from '../../todo/actions'

const mapStateToProps = state => ({
  id: state.id
})
const mapDispatchToProps = dispatch => ({
  handleClick(id) {
    dispatch(deleteTodo(id))
  }
})

const Delete = ({ handleClick, todoId }) => <button onClick={() => handleClick(todoId)}>delete</button>

Delete.propTypes = {
  handleClick: func.isRequired,
  todoId: string.isRequired
}

const ConnectedDelete = connect(
  mapStateToProps,
  mapDispatchToProps
)(Delete)

export default ConnectedDelete