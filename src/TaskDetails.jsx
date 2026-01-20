import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function TaskDetails({ tasks, updateTask }) {
  const { id } = useParams();

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

  return (
    <>
      <h2>{task.title}</h2>

      <button onClick={() => setIsDialogOpen(true)}>Edit</button>

      <dialog ref={dialogRef}>
        <form
          method="dialog"
          onSubmit={(e) => {
            e.preventDefault();
            updateTask({
              ...task,
              description,
            });
            setIsDialogOpen(false);
          }}
        >
          <h3>Edit description</h3>

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div>
            <button type="submit">Save</button>
            <button type="button" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
}
