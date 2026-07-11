import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css'

function TodoForm() {
    const { setOpenModal, addTodo } = React.useContext(TodoContext)
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const onSubmit = (event) => {
        setOpenModal(false)
        addTodo(newTodoValue);
    }

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    };
    
    return (
        <>
            <div className="modal-overlay">
                <div className="modal">
                    <button className="close-btn"
                        onClick={onCancel}
                    >&times;</button>
                    <h2>Nueva tarea ✨</h2>
                    <p>¿Qué quieres hacer hoy?</p>
                    <input
                        type="text"
                        placeholder="Agrega una nueva tarea"
                        value={newTodoValue}
                        onChange={onChange}
                    />
                    <div className="modal-actions">
                        <button className="btn cancel"
                            onClick={onCancel}
                        >Cancelar</button>
                        <button className="btn save"
                        onClick={onSubmit}
                        >Guardar</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export { TodoForm }