import React from 'react'
import uuidv4 from 'uuid/v4'
import { func } from 'prop-types'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { addTodo } from '../todo/actions'
import { getId, getText } from '../todo/reducer'

const mapStateToProps = state => ({
  id: getId(state),
  text: getText(state)
})
const mapDispatchToProps = dispatch => ({
  handleSubmit(id, text) {
    dispatch(addTodo(id, text))
  }
})

const Add = ({ handleSubmit }) => (
  <form onSubmit={e => {
    e.preventDefault()
    handleSubmit(uuidv4(), e.target.todo.value)
  }}>
    <input type="text" name="todo" />
    <Button bsStyle='primary' type="submit">+</Button>
  </form>
)

Add.propTypes = {
  handleSubmit: func.isRequired
}

const ConnectedAdd = connect(
  mapStateToProps,
  mapDispatchToProps
)(Add)

export default ConnectedAdd