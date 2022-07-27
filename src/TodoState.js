import { useState } from "react";


export function useTodoState(initialState) {
  const [todos, setTodos] = useState(initialState);

  const AddTodo = () => {
  };

  const deleteTodo = (element) => {
   // ... create logic for delete a todo
  };

  return {
    todos,
    AddTodo,
    deleteTodo
  };
}