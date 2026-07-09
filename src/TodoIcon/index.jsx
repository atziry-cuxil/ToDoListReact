import CheckSVG from '../check.svg?react'
import DeleteSVG from '../delete.svg?react'
//import './TodoItem.css'

const iconTypes = {
    'check': (color) => <CheckSVG className='iconoCheck' fill={color}/>,//agregar classname de icon
    'delete': (color) => <DeleteSVG className='iconoDelete' fill={color}/>,
}

function TodoIcon({ type , color, onClick}) {
    return (
        <span
            className={`${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    )
}

export { TodoIcon }

//Todo icon debe contener los estilos de los iconos, (esto depende de la logica)

