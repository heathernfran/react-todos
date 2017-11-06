import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_EDIT
 } from './actions'

const initialState = {
  todos: [{text: 'initial todo', isEditing: false}]
}

const todoApp = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log('add todo', state, action)
      return {
        ...state, todos: [
          ...state.todos, {
            text: action.text,
            isEditing: false
          }]}
    case TOGGLE_EDIT:
      console.log('toggle edit', state, action)
      return {...state, todos: state.todos.map((todo) => {
        if (todo === action.todo) {
          return {...todo, isEditing: !todo.isEditing}
        }
        return todo
      })}
    case EDIT_TODO:
      console.log('edit todo', state, action)
      return {...state, todos: state.todos.map((todo, index) => {
        if (index === action.index) {
          return {...todo, todo: {
            text: action.text,
            isEditing: false
          }}
        }
        return todo
      })}
    case DELETE_TODO:
      console.log('delete todo', state, action)
      return {...state, todos: state.todos.filter((todo, index) => index !== action.index)}
    default:
      console.log(state, action)
      return state
  }
}

export default todoApp