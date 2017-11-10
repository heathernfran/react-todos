import { combineReducers } from 'redux'
import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_EDIT
 } from './actions'

const todos = (state = [], action = {}) => {
  switch (action.type) {
  case ADD_TODO:
    return [...state, {
        id: action.id,
        text: action.text,
        isEditing: false
    }]
  case TOGGLE_EDIT:
    return [...state.map(todo =>
      todo.id === action.id ?
        { ...todo, isEditing: !todo.isEditing } : todo
    )]
  case EDIT_TODO:
    return [...state.map(todo =>
      todo.id === action.id ?
        { ...todo, text: action.text, isEditing: false } : todo
    )]
  case DELETE_TODO:
    return [...state.filter(todo => todo.id !== action.id)]
  default:
    return state
  }
}


const reducer = combineReducers({
  todos
})

export default reducer