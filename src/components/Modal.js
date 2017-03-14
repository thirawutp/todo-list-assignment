import React from 'react'
import classnames from 'classnames'

const Modal = ({ open = false, children, title, onSubmit, disableSubmit, onClose }) => {
  const modalClass = classnames('modal','fade',{
    'show': open,
    'modal-show': open
  })
  return (
    <div className={modalClass} id="myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">{ title }</h5>
            <button type="button" className="close" data-dismiss="modal"  onClick={onClose} aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            { children }
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose} data-dismiss="modal" >Close</button>
            <button type="button" className="btn btn-primary" onClick={onSubmit} disabled={disableSubmit}>Save</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
