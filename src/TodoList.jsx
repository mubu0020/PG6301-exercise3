import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function TodoList({ tasks, addTask, toggleTask }) {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addTask(title);
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
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />

            <Link to={`/tasks/${task.id}`}>{task.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
