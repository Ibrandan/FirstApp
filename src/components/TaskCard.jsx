import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task, id }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <article className="bg-gray-800 text-white p-4 rounded-md">
      <h3 className="text-xl font-bold capitalize">{task.title}</h3>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <button
        className="bg-red-500 rounded-md py-1 px-2 mt-4 hover:bg-red-400"
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        Eliminar Tarea
      </button>
    </article>
  );
}

export default TaskCard;
