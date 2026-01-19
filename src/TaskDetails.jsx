import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function TaskDetails({ tasks, updateTask }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const task = tasks.find((t) => t.id === id);

  const [description, setDescription] = useState(task ? task.description : "");

  if (!task) {
    return <p>Task not found</p>;
  }

  function handleSave() {
    updateTask({
      ...task,
      description,
    });
    navigate("/");
  }

  return (
    <>
      <h2>{task.title}</h2>

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br />

      <button onClick={handleSave}>Save</button>
    </>
  );
}
