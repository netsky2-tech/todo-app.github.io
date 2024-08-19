import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';

const defaultItems = [
  {name: 'Hacer cafe', completed: false},
  {name: 'estudiar', completed: true},
  {name: 'Tomar agua', completed: false},
]

function App() {

  return (
    <TodoProvider>
        <AppUI />
    </TodoProvider>

  )
}

export default App;
