import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_EDIT
 } from './actions'

const initialState = {
  todos: [{id: '1', text: 'initial todo', isEditing: false}]
}

const todoApp = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log('add todo', state, action)
      return {
        ...state, todos: [
          ...state.todos, {
            id: action.id,
            text: action.text,
            isEditing: false
          }]}
    case TOGGLE_EDIT:
      console.log('toggle edit', state, action)
      return {...state, todos: state.todos.map(todo =>
        todo.id === action.id ?
          { ...todo, isEditing: !todo.isEditing } : todo
      )}
    case EDIT_TODO:
      console.log('edit todo', state, action)
      return {...state, todos: state.todos.map(todo =>
        todo.id === action.id ?
          { ...todo, text: action.text, isEditing: false } : todo
      )}
    case DELETE_TODO:
      console.log('delete todo', state, action)
      return {...state, todos: state.todos.filter(todo => todo.id !== action.id)}
    default:
      console.log(state, action)
      return state
  }
}

export default todoApp