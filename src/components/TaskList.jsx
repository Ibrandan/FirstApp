import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList({}) {
  const { tasks, deleteTask } = useContext(TaskContext);

  if (tasks.length === 0) {
    return (
      <p className="text-white text-4xl text-white font-bold text-center">
        No hay Tareas
      </p>
    );
  }

  return (
    <section className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </section>
  );
}

export default TaskList;
