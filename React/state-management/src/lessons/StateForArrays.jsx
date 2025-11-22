import React, { useState } from "react";

// Helper function to generate unique IDs (e.g., using a library would be better in real app)
let nextId = 0;

export const StateForArrays = () => {
  // Initialize state with an array of todo objects
  const [todos, setTodos] = useState([]);
  const [inputTask, setInputTask] = useState("");

  // --- 1. Add Item ---
  const addTodo = () => {
    if (inputTask.trim() === "") return;

    const newTodo = { id: nextId++, text: inputTask, completed: false };

    // Use spread syntax to create a BRAND NEW array with the new item added to the end
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInputTask(""); // Clear input field
  };

  // --- 2. Remove Item ---
  const removeTodo = (idToRemove) => {
    // Use the filter method to create a BRAND NEW array containing only items that match the condition
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== idToRemove));
  };

  // --- 3. Update Item ---
  const toggleTodoCompletion = (idToUpdate) => {
    // Use the map method to create a BRAND NEW array
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        // If this is the item we need to update, create a NEW object for it
        if (todo.id === idToUpdate) {
          return {
            ...todo, // Spread the existing properties
            completed: !todo.completed, // Overwrite just the 'completed' status
          };
        }
        // Otherwise, return the original (unmodified) item
        return todo;
      })
    );
  };

  // Note: Replace Entire Array is simply `setTodos(newArrayFromAPIOrWherever)`
  // --- 4. Clear All Items  ---
  const clearAll = () => {
    //setTodos((prevTodos) => []); // Functional update - only use if previous values matters
    setTodos([])  // better to use since we will just reset it to empty array
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px" }}>
      <h2>Todo List</h2>

      {/* Input and Add Button */}
      <div>
        <input
          type="text"
          value={inputTask}
          onChange={(e) => setInputTask(e.target.value)}
          placeholder="New task..."
        />
        <button onClick={addTodo} style={{ marginLeft: "10px" }}>
          Add Todo
        </button>
      </div>

      {/* Display List of Todos */}
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "5px 0",
            }}
          >
            <span
              onClick={() => toggleTodoCompletion(todo.id)}
              style={{
                cursor: "pointer",
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => removeTodo(todo.id)}
              style={{ color: "red" }}
            >
              Remove
            </button>
          </li>
        ))}
        <button onClick={clearAll} style={{ color: "red" }}>
          Clear
        </button>
      </ul>
    </div>
  );
};
