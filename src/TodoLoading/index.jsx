import React from 'react'
import './TodoLoading.css'

const TodoLoading = () => {
    return (
        <li className='LoadingTodo-container'>
            <span className='LoadingTodo-completeIcon'></span>
            <p className='LoadingTodo-text'></p>
            <span className='LoadingTodo-deleteIcon'></span>
        </li>
    );
}

export { TodoLoading }
