import React from 'react';
import { TodoContext } from '../TodoContext';
import './CreateTodoButton.css'

function CreateTodoButton() {
    const { openModal, setOpenModal } = React.useContext(TodoContext)
    return (
        <button
            onClick={(event) => {
                setOpenModal(true)
            }}
        >Agregar +</button>
    );
}

export { CreateTodoButton }

