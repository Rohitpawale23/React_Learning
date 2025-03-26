import react from "react";
import { createContext, useContext } from "react";

// Creation of the context
export const TodoContext = createContext({
  // parameters in TODO list
  todos: [
    {
      id: 1,
      todo: "Temp msg in todo",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id, todo) => {},
  toggleComplete: (id) => {},

});

// Use conetext
export const useTodo = () => {
  return useContext(TodoContext);
};

// Context provider creation
export const TodoProvider = TodoContext.Provider;
