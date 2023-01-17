import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <section className="max-w-md mx-auto ">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 rounded-md ">
        <section className="my-3">
          <label htmlFor="title" className="text-white">
            Nombre de la Tarea
          </label>
          <input
            id="title"
            className="bg-slate-3 p-3 w-full mb-2"
            placeholder="Escribe el nombre de la tarea"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </section>
        <section className="my-3">
          <label htmlFor="description" className="text-white">
            Descripcion de la tarea
          </label>
          <textarea
            id="description"
            className="bg-slate-3 p-3 w-full mb-2"
            placeholder="Escribe la descripcion de la tarea"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </section>
        <button type="submit" className="bg-indigo-500 px-3 py-1">
          Guardar
        </button>
      </form>
    </section>
  );
}

export default TaskForm;
