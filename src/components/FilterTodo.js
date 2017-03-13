import React from 'react'


const FilterTodo = (props) => {
  return (
    <div className="card filter-list">
      <span className='filter-item'>Complete</span>
      <span className='filter-item'>Incomplete</span>
      <span className='filter-item'>Total</span>
    </div>
  )
}

export default FilterTodo
