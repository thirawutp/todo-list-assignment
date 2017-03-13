import React from 'react'
import classnames from 'classnames'

const TodoItem = ({ title, completed }) => {
  const labelClass = classnames('todo-label',{
    'todo-label-complete': completed
  })
  return (
    <li className="list-group-item todo-item">
      <input type="checkbox" onChange={(a)=>a} checked={completed}/>
      <span className={labelClass}>{ title }</span>
      <span className='todo-icon-group'>
        <i className="fa fa-eye todo-icon" aria-hidden="true"/>
        <i className="fa fa-times todo-icon" aria-hidden="true"></i>
      </span>
    </li>
  )
}

export default TodoItem
