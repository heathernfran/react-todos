import * as types from './types'

const addTodo = (id, text) => ({
  type: types.ADD_TODO,
  payload: {
    id,
    text
  }
})

const toggleEdit = (id, isEditing) => ({
  type: types.TOGGLE_EDIT,
  payload: {
    id,
    isEditing
  }
})

const editTodo = (id, text) => ({
  type: types.EDIT_TODO,
  payload: {
    id,
    text
  }
})

const deleteTodo = id => ({
  type: types.DELETE_TODO,
  payload: {
    id
  }
})

export {
  addTodo,
  toggleEdit,
  editTodo,
  deleteTodo
}