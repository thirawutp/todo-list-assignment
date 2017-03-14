import React from 'react'
import TodoItem from '../containers/TodoItem'
import { FILTER_COMPLETE, FILTER_INCOMPLETE } from '../actions/filterType'

const TodoList = ({ list=[], filter }) => {
  
  let itemList = list
  if(filter === FILTER_COMPLETE) {
    itemList = list.filter(item => item.completed)
  } else if (filter === FILTER_INCOMPLETE) {
    itemList = list.filter(item => !item.completed)
  }
    
  return (
    <ul className="list-group todo-list">
      {itemList.map(item=>(
        <TodoItem key={item._id} title={item.title} completed={item.completed} value={item} />
      ))}
    </ul>
  )
}

export default TodoList
