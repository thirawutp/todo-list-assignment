import { combineReducers } from 'redux'
import todoListReducer from './todoListReducer'
import formReducer from './formReducer'
import filterReducer from './filterReducer'

const rootReducer = combineReducers({
  todoList: todoListReducer,
  form: formReducer,
  filter: filterReducer
})

export default rootReducer
