import { ReactComponent as CheckSVG} from './check.svg'
import { ReactComponent as DeleteSVG} from './delete.svg'

function TodoIcon({type, color, onClick}) {

    const iconTypes = {
        'check': (color) => <CheckSVG className='Icon-svg' fill={color}/>,
        'delete': (color) => <DeleteSVG className='Icon-svg' fill={color}/>
    }

    return (
        <span className={`Icon-container Icon-container-${type}`} onClick={onClick}>
            {iconTypes[type](color)}
        </span>
    )
}

export { TodoIcon }