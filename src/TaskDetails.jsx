import React, { useRef, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function TaskDetails({ tasks, updateTask }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const task = tasks.find((t) => t.id === id);

  const [description, setDescription] = useState(task ? task.description : "");
  const dialogRef = useRef(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    if (!dialogRef.current) return;

    if (isDialogOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [isDialogOpen]);

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

      <button onClick={() => setIsDialogOpen(true)}>Edit</button>

      <dialog ref={dialogRef}>
        <p>Dialog kommer her</p>
      </dialog>
    </>
  );
}
