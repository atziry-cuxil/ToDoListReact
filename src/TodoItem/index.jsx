import { CompleteIcon } from '../CompleteIcon'
import { DeleteIcon } from '../DeleteIcon'

import './TodoItem.css'

function TodoItem(props) {
  return (
    <li>
      <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
      />
      {/* <span 
      className={`${props.completed ? 'verde' : 'amarillo' }`}
      onClick={props.onComplete}
      >✓</span> */}
      <p className={`parrafo ${props.completed ? 'completado' : ''}`}>{props.text}</p>
      {/* <div
      onClick={props.onDelete}
      >❌</div> */}
      <DeleteIcon
        onDelete={props.onDelete}
      />
    </li>
  );
}

export { TodoItem }


//cuando los haya elementos