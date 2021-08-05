import "semantic-ui-css/semantic.min.css";
import "./App.css";
import { useState, useEffect } from "react";

import Container from "./components/Container";
import Header from "./components/Header";
import InputTask from "./components/InputTask/InputTask";
import TasksContent from "./components/TasksContent";

function App() {
  const [tasks, setTasks] = useState([]);

  // TODO: Pasar las citas a localstorage
  let initialTasks = JSON.parse(localStorage.getItem("tasks"));
  console.log(initialTasks);
  if (!initialTasks) {
    initialTasks = [];
  }

  useEffect(() => {
    if (initialTasks) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
      localStorage.setItem("tasks", JSON.stringify([]));
    }
    console.log(initialTasks);
  }, [tasks]);
  // END TODO

  // Crear las tareas
  const createTask = (task) => {
    setTasks([...tasks, task]);
  };

  // función que elimina una cita por su id
  const deleteTask = (id) => {
    const currentTasks = tasks.filter((task) => task.idTask !== id);
    setTasks(currentTasks);
  };

  return (
    <>
      <Container>
        <Header />
        <InputTask createTask={createTask} />
        <TasksContent tasks={tasks} deleteTask={deleteTask} />
      </Container>
    </>
  );
}

export default App;
