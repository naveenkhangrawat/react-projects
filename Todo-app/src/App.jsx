import { useEffect, useState } from 'react'
import './App.css'
import { TodoContext } from './contexts/TodoContext';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {

  const [todos, setTodos] = useState([]);

  function addTodo(todoTitle) {
    setTodos((prevTodos) => [{
      id: Date.now(),
      title: todoTitle,
      isCompleted: false
    }, ...prevTodos])
  }

  function updateTodo(todoId, todo) {
    setTodos((prevTodos) => prevTodos.map((prevTodo) => {
      return prevTodo.id === todoId ? todo : prevTodo;
    }))
  }

  function removeTodo(todoId) {
    setTodos((prevTodos) => prevTodos.filter((todo) => {
      return todo.id !== todoId;
    }))
  }

  function toggleCompleted(todoId) {
    setTodos((prevTodos) => prevTodos.map((prevTodo) => {
      return prevTodo.id === todoId ? {...prevTodo, isCompleted: !prevTodo.isCompleted} : prevTodo;
    }))
  }

  const todoCtxValue = {todos, addTodo, updateTodo, removeTodo, toggleCompleted};

  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem('todoList'));
    if(todoList && todoList.length > 0) {
      setTodos(todoList);
    }
  },[])

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todos));
  },[todos])


  return (
    <>
      <TodoContext.Provider value={todoCtxValue} >
        <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
              <div className="mb-4">
                <TodoForm /> 
              </div>
              <div className="flex flex-wrap gap-y-3">
                {todos.map((todoElement) => {
                  return ( <div className='w-full' key={todoElement.id}>
                    <TodoItem todo={todoElement} />
                  </div> )
                })}
              </div>
          </div>
        </div>
      </TodoContext.Provider>
    </>
  )
}

export default App;
