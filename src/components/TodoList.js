import React from 'react'
import TodoItem from './TodoItem'

const TodoList = (props) => {
  return (
    <ul className="list-group todo-list">
      <TodoItem title={'New'} completed={true} />
      <TodoItem title={'Deleted'} completed={false} />
      <TodoItem title={'Warnings'} completed={false} />
    </ul>
  )
}

export default TodoList
