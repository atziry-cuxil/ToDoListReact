//Enviar children y donde va a estar el elemento
import React from 'react';
import ReactDOM from 'react-dom'
import { TodoForm } from '../TodoForm';
import { TodoContext } from '../TodoContext';

function Modal({children}) {
    return ReactDOM.createPortal(
        <> {children}</>,
        document.getElementById('modal')
    );
}

export { Modal };
