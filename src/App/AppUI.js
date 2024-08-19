import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoForm } from '../TodoForm';
import { TodoItem } from '../TodoItem';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptysTodos } from '../EmptysTodos';
import { TodoContext } from '../TodoContext';
import { useContext } from 'react';
import { Modal } from '../Modal';


function AppUI() {

  const {loading, error, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal} = useContext(TodoContext)
      return (
    <>
      <TodoCounter/>

      <TodoSearch />
              <TodoList>
                {loading && 
                  (
                    <>
                      <TodosLoading />
                      <TodosLoading />
                      <TodosLoading />
                    </>
                  )
                }
                {error && <TodosError />}
                {(!loading && searchedTodos.length === 0) && <EmptysTodos />}

                {searchedTodos.map(todo => (
                  <TodoItem 
                  key={todo.name} 
                  name={todo.name} 
                  completed={todo.completed} 
                  onCompleted={ () => completeTodo(todo.name) }
                  onDelete={ () => deleteTodo(todo.name)}
                  ></TodoItem>
                ))}
              </TodoList>

      <CreateTodoButton setOpenModal={setOpenModal} />
        {openModal && (
          <Modal>
            <TodoForm></TodoForm>
          </Modal>
        )}
    </>
  );
}

export { AppUI }