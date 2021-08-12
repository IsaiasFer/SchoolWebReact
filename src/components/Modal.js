import React from 'react'
import ReactDOM from 'react-dom'

function Modal(props) {
    if (!props.isOpen) {
        return null
    } else {
        return (
            ReactDOM.createPortal(<h1>Hola, realmente no estoy aquí</h1>, document.getElementById('modal'))
        )
    }
}

export default Modal