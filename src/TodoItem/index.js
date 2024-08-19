import './TodoItem.css'
import { CompleteIcon } from '../TodoIcon/CompleteIcon'
import { DeleteIcon } from '../TodoIcon/DeleteIcon'
function TodoItem({name, completed, onCompleted, onDelete}) {
  return (
    <li className='TodoItem'>

      <CompleteIcon completed={completed} onComplete={onCompleted}/>

      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>{name}</p>


      <DeleteIcon onDelete={onDelete}/>
    </li>
  ) 
}

export { TodoItem }