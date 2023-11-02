import { createContext, useContext } from "react";


const TodoContext = createContext({
    todos: [],
    addTodo: (todoTitle) => {},
    updateTodo : () => {},
    removeTodo: () => {},
    toggleCompleted : () => {}
});


export default function useTodoContext() {
    return useContext(TodoContext);
}

export {TodoContext}