export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_EDIT = 'TOGGLE_EDIT'

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text
  }
}

export const toggleEdit = (isEditing) => {
  return {
    type: TOGGLE_EDIT,
    isEditing
  }
}