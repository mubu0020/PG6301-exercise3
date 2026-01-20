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
    const dialog = dialogRef.current;
    if (!dialog) return;

    function handleClose() {
      setIsDialogOpen(false);
    }

    dialog.addEventListener("close", handleClose);

    if (isDialogOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }

    return () => {
      dialog.removeEventListener("close", handleClose);
    };
  }, [isDialogOpen]);

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
