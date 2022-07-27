import { useState } from 'react';
import './App.css';
import Box from './Box';
import { useCounterState } from './customHook';
import Form from './Form';
import { useTodoState } from './TodoState';

function App() {
  const {count, handleSubmit} = useCounterState(0);
  
  const {todos, addTodo, deleteTodo} = useTodoState([]);
  // cada vez que el usuario agregue un nuevo todo, 
  // se agrega al listado de todos.
  return (
    <div className="App">
      <Box
        name="Caja 1"
        count={count}
        handleSubmit={handleSubmit}
      />
      <Form submit={addTodo} />
      {todos.map(todo => <p>todo</p>)}
    </div>
  );
}

export default App;
