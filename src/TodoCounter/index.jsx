import './TodoCounter.css'

function TodoCounter({ total, completed }) {

  if (total == completed) {
    return (
      <h1>Felicidades!!! <br /> Has completado las tareas</h1>
    )
  }
  return (
    <h1>
      Has completado {completed} de {total} ToDos
    </h1>
  );
}

export { TodoCounter }

