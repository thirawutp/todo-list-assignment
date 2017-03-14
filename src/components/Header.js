import React from 'react'

const Header = ({ onClick }) => {
  return (
    <div className="card title-card">
      <h4 className="card-title title">
        Reminders
        <i className="fa fa-plus title-icon" aria-hidden="true" onClick={onClick}></i>
      </h4>
    </div>
  )
}

export default Header
