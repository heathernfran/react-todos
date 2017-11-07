export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_EDIT = 'TOGGLE_EDIT'
export const EDIT_TODO = 'EDIT_TODO'
export const DELETE_TODO = 'DELETE_TODO'

export const addTodo = (id, text) => {
  return {
    type: ADD_TODO,
    id,
    text
  }
}

export const toggleEdit = (id, isEditing) => {
  return {
    type: TOGGLE_EDIT,
    id,
    isEditing
  }
}

export const editTodo = (id, text) => {
  return {
    type: EDIT_TODO,
    id,
    text
  }
}

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    id
  }
}