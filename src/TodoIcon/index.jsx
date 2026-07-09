import CheckSVG from '../check.svg?react'
import DeleteSVG from '../delete.svg?react'

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
