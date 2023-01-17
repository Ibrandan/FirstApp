import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

const App = () => {
  return (
    <section className="bg-zinc-900  h-screen">
      <section className="container mx-auto">
        <h2 className="text-3xl text-center text-white font-bold py-3">
          Carga de Tareas
        </h2>
        <TaskForm />
        <h2 className="text-3xl text-center text-white font-bold py-3">
          Lista de Tareas
        </h2>
        <TaskList />
      </section>
    </section>
  );
};
export default App;
