import React, { useState } from "react";
import logo from ".logo.svg";
import ".App.css";
import TodoList from './components/TodoList'
import "bootstrap/dist/css/bootstrap.min.css"

function TodoList () {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  function handleInputChange(event) {
    setTodoInput(event.target.value);
  }

  function handleAddTodo() {
    if (todoInput.trim() !== "") {
      setTodos([...todos, todoInput.trim()]);
      setTodoInput("");
    }
  }

  function handleRemoveTodo(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div>
 <input type="text" value={todoInput} onChange={handleInputChange} />       
 <button onClick={handleAddTodo}>Add</button>
       <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleRemoveTodo(index)}>x</button>
          </li>
        ))}
       </ul>
    </div>
  );
}
export default TodoList;