import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css'

function TodoCounter() {
  const {completedTodos, totalTodos} = React.useContext(TodoContext)

  if (totalTodos == completedTodos) {
    return (
      <h1>Felicidades!!! <br /> Has completado las tareas</h1>
    )
  }
  
  return (
    <h1>
      Has completado {completedTodos} de {totalTodos} ToDos
    </h1>
  );
}

export { TodoCounter }

