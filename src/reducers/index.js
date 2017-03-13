import { combineReducers } from 'redux'
import todoListReducer from './todoListReducer'
import newTodoReducer from './newTodoReducer'

const rootReducer = combineReducers({
  todoList: todoListReducer,
  newTodo: newTodoReducer,
})

export default rootReducer
