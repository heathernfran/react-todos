import * as types from './types'

/* State shape
{
  id: string,
  text: string,
  isEditing: bool
}
*/

const getInitialEdit = state => {
  const newState = { ...state };
  newState.isEditing = false;
  return newState.isEditing;
}

export const getToggleEdit = state => {
  const newState = { ...state }
  newState.isEditing = !newState.isEditing
  return newState.isEditing
}

export const getTodos = state => state

export const getId = state => state.id
export const getIsEditing = state => state.isEditing
export const getText = state => state.text


const todos = (state = [], action = {}) => {
  switch (action.type) {
  case types.ADD_TODO:
    return [...state, {
        id: action.payload.id,
        text: action.payload.text,
        isEditing: getInitialEdit(state)
    }]
  case types.TOGGLE_EDIT:
    return [...state.map(todo =>
      todo.id === action.payload.id ?
        { ...todo, isEditing: getToggleEdit(todo) } : todo
    )]
  case types.EDIT_TODO:
    return [...state.map(todo =>
      todo.id === action.payload.id ?
        { ...todo, text: action.payload.text, isEditing: getToggleEdit(todo) } : todo
    )]
  case types.DELETE_TODO:
    return [...state.filter(todo => todo.id !== action.payload.id)]
  default:
    return state
  }
}

export default todos