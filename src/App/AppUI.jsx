import { useState } from 'react'
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton'
import { TodoLoading } from '../TodoLoading'
import { TodoError } from '../TodoError'
import { EmptyTodos } from '../EmptyTodos'
import { TodoContext } from '../TodoContext'


//function AppUI({ completedTodos, totalTodos, searchValue, setSearchValue, searchedTodos, completeTodo, deleteTodo, loading, error }) {
function AppUI() {
    return (
        <div>
            <h3>To Do List</h3>
            <TodoCounter />
            <TodoSearch />

            <TodoContext.Consumer>
                {({
                    searchedTodos,
                    completeTodo,
                    deleteTodo,
                    loading,
                    error
                }) => (
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
                )}

            </TodoContext.Consumer>

            <CreateTodoButton />
        </div>
    )
}

export { AppUI }