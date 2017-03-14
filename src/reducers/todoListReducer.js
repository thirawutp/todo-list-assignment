import { CREATE_TODO, TOGGLE_TODO, DELETE_TODO, EDIT_TODO } from '../actions/types'

const todoListReducer = (state=[],action) => {
  switch (action.type) {
    case CREATE_TODO: 
      return [...state, action.payload.todo]
    case TOGGLE_TODO:
      return state.map(todo=> {
        if(todo._id === action.payload.todoId) 
          return { ...todo, completed: !todo.completed }
        return todo
      })
    case DELETE_TODO:
      return state.filter(todo => todo._id !== action.payload.todoId )
    case EDIT_TODO:
      return state.map(todo => {
        if(todo._id === action.payload.todo._id)
          return action.payload.todo
        return todo
      })
    default:
      return state
  }
}

export default todoListReducer
