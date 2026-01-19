import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import TodoList from "./TodoList";
import TaskDetails from "./TaskDetails";

export default function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(title) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: title,
        description: "",
        completed: false,
      },
    ]);
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  function updateTask(updatedTask) {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)),
    );
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <TodoList tasks={tasks} addTask={addTask} toggleTask={toggleTask} />
        }
      />

      <Route
        path="/tasks/:id"
        element={<TaskDetails tasks={tasks} updateTask={updateTask} />}
      />
    </Routes>
  );
}
