export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_EDIT = 'TOGGLE_EDIT'
export const EDIT_TODO = 'EDIT_TODO'
export const DELETE_TODO = 'DELETE_TODO'

export const addTodo = (id, text) => ({
  type: ADD_TODO,
  id,
  text
})

export const toggleEdit = (id, isEditing) => ({
  type: TOGGLE_EDIT,
  id,
  isEditing
})

export const editTodo = (id, text) => ({
  type: EDIT_TODO,
  id,
  text
})

export const deleteTodo = id => ({
  type: DELETE_TODO,
  id
})