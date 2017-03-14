import React from 'react'
import classnames from 'classnames'

const TodoItem = ({ title, completed, value, toggleTodo, deleteTodo, openEditForm }) => {
  const labelClass = classnames('todo-label',{
    'todo-label-complete': completed
  })
  return (
    <li className="list-group-item todo-item">
      <input type="checkbox" onChange={()=>toggleTodo(value._id)} checked={completed}/>
      <span className={labelClass} onClick={()=>toggleTodo(value._id)} >{ title }</span>
      <span className='todo-icon-group'>
        <i className="fa fa-eye todo-icon" onClick={()=>openEditForm(value)} aria-hidden="true"/>
        <i className="fa fa-times todo-icon" onClick={()=>deleteTodo(value._id)} aria-hidden="true"></i>
      </span>
    </li>
  )
}

export default TodoItem
