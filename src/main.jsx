import React from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";

function App() {
  // State for alle tasks
  const [tasks, setTasks] = useState([]);

  // State for input-feltet
  const [title, setTitle] = useState("");

  // Kalles når skjeamet sendes inn
  function handleSubmit(e) {
    e.preventDefault();

    // Legger til ny task
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: title,
        completed: false,
      },
    ]);

    // Tøm inputfeltet
    setTitle("");
  }

  // Toggle ferdig/ikke ferdig

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  return (
    <>
      <h1>Todo App</h1>

      {/* Form for ny task */}
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <button>Add</button>
      </form>

      {/* Liste med tasks */}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            {task.title}
          </li>
        ))}
      </ul>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
