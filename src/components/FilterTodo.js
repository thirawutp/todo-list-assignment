import React from 'react'
import classnames from 'classnames'
import { FILTER_ALL, FILTER_COMPLETE, FILTER_INCOMPLETE } from '../actions/filterType'

const FilterTodo = ({ filter, filterTodo, total }) => {
  
  const complete = total.filter(item=>item.completed).length
  const inComplete = total.filter(item=>!item.completed).length

  const totalClassName = classnames('filter-item',{'filter-item-active': filter === FILTER_ALL})
  const inCompleteClassName = classnames('filter-item',{'filter-item-active': filter === FILTER_INCOMPLETE})
  const complateClassName = classnames('filter-item',{'filter-item-active': filter === FILTER_COMPLETE})
  
  return (
    <div className="card filter-list">
      <span className={totalClassName} onClick={()=>filterTodo(FILTER_ALL)}>Total ({ total.length })</span>
      <span className={inCompleteClassName} onClick={()=>filterTodo(FILTER_INCOMPLETE)}>Incomplete ({ inComplete })</span>
      <span className={complateClassName} onClick={()=>filterTodo(FILTER_COMPLETE)}>Complete ({ complete })</span>
    </div>
  )
}

export default FilterTodo
