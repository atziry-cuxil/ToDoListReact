import { useState } from 'react'
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton'
import { TodoLoading } from '../TodoLoading'
import { TodoError } from '../TodoError'
import { EmptyTodos } from '../EmptyTodos'
import { Modal } from '../Modal'
import { TodoContext } from '../TodoContext'
import {TodoForm} from '../TodoForm'
import React from 'react';

function AppUI() {
    const {
        searchedTodos,
        completeTodo,
        deleteTodo,
        loading,
        error,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext)

    return (
        <div>
            <h3>To Do List</h3>
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {loading &&
                    <>
                        <li> <p>Cargando...</p> </li>
                        <TodoLoading />
                        <TodoLoading />
                        <TodoLoading />
                    </>}
                {error && <TodoError />}
                {(!loading && searchedTodos.length == 0) && <EmptyTodos />}

                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            <CreateTodoButton />

            {openModal && <Modal>
                <TodoForm/>
            </Modal>}
        </div>
    )
}

export { AppUI }