import './CreateTodoButton.css'
function CreateTodoButton({setOpenModal}) {
    return (
        <button className="TodoButtonStyles" 
            onClick={ () => setOpenModal(state => !state) }
        >+</button>
    )
}

export { CreateTodoButton }