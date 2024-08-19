import React, { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = createContext()

function TodoProvider({children}) {
    
  const {item: todos, saveItem, loading, error} = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(todo => todo.name.toLowerCase().includes(searchValue.toLowerCase()))

  const addTodo = (text) => {
    const newTodos = [...todos]
    newTodos.push({
      name: text,
      completed: false
    })
    saveItem(newTodos)
  }

  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      todo => todo.name === text
    )
    newTodos[todoIndex].completed ? newTodos[todoIndex].completed = false : newTodos[todoIndex].completed = true
    saveItem(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      todo => todo.name === text
    )
    newTodos.splice(todoIndex,1)
    saveItem(newTodos)
  }

    return (
        <TodoContext.Provider value={
            {
                loading, 
                error, 
                totalTodos, 
                completedTodos, 
                searchValue, 
                setSearchValue, 
                searchedTodos, 
                completeTodo,
                deleteTodo,
                openModal,
                setOpenModal,
                addTodo
            }        
        }>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }