import React from 'react'
import { TodoIcon } from '../TodoIcon'

function CompleteIcon({completed, onComplete}) {

    return (
        <TodoIcon
            type='check'
            color={completed  ? 'rgb(25, 207, 25)': 'gray'}
            onClick={onComplete}
        />
    )
}

export { CompleteIcon }


