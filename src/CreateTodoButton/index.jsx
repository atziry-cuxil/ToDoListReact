import './CreateTodoButton.css'

function CreateTodoButton() {
    return (
        <button
            onClick={(event) => {
                console.log(event)
                console.log(event.target)
                console.log('le diste click')
            }}
        >Agregar +</button>
    );
}

export { CreateTodoButton }


