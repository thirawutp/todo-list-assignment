import React from 'react'

const renderInput = (type, otherProps) => {
  if( type === 'textarea' )
    return <textarea className="form-control" {...otherProps} />
  else
    return <input className="form-control" type={type} {...otherProps} />
}

const InputGroup = ({ type='text', label, ...otherProps }) => {
  return (
    <div className="form-group row">
      <label className="col-3 col-form-label">{ label }</label>
      <div className="col-9">
        { renderInput(type, otherProps) }
      </div>
    </div>
  )
}

export default InputGroup
