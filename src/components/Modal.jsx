import React from 'react'

function Modal(props) {
    if (!props.isOpen){
        return null;
    }
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="modal-close" onClick={props.onClose}>
          &times;
        </button>
        {props.children}
      </div>
    </div>
  )
}

export default Modal