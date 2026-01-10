import React from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = React.useState([]);
  const [title, setTitle] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTasks([...tasks, { title, completed: false }]);
    setTitle("");
  }

  return (
    <>
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <button>Add</button>
      </form>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input type="checkbox" />
            {task.title}
          </li>
        ))}
      </ul>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
