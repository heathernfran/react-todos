import {
  ADD_TODO,
  TOGGLE_EDIT
 } from './actions'

const initialState = {
  todos: []
}

const todoApp = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log('add todo', state, action)
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            isEditing: false
          }
        ]
      })
    case TOGGLE_EDIT:
      console.log('toggle edit', state, action)
      return Object.assign({}, state, {
        todos: state.todos.map((todo, index) => {
          if (index === action.index) {
            return Object.assign({}, todo, {
              isEditing: !todo.isEditing
            })
          }
          return todo
        })
      })
    default:
      console.log(state, action)
      return state
  }
}

export default todoApp