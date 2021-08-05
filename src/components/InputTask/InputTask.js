import { Select, Input, Button, Grid, Header, Icon } from "semantic-ui-react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const options = [
  { key: "deporte", text: "Deporte", value: "deporte" },
  { key: "casa", text: "Casa", value: "casa" },
  { key: "oficina", text: "Oficina", value: "oficina" },
  { key: "otra", text: "Otra", value: "otra" },
];

export default function InputTask(props) {
  // Creamos estados
  const [task, setTask] = useState({
    idTask: "",
    taskName: "",
    categoryTask: "",
  });
  const [error, setError] = useState(false);
  const { createTask } = props;

  // Cuando cambia recogemos valor
  const onChangeTask = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeCategoryTask = (e, data) => {
    setTask({
      ...task,
      [data.name]: data.value,
    });
  };

  // Cuando se presiona agregar cita

  const onSubmitCita = (e) => {
    // para que no recargue la página
    e.preventDefault();

    // Validar
    if (task.taskName.trim() === "") {
      setError(true);
      return;
    }

    // Eliminar el mensaje previo
    setError(false);

    // asignamos ID
    task.idTask = uuidv4();

    // Crear la tarea
    createTask(task);

    // Limpiamos input
    // Se reinicia por el value que hay en cada input
    setTask({
      idTask: "",
      taskName: "",
      categoryTask: "",
    });
  };

  return (
    <>
      <Grid centered columns={2}>
        <Input type="text" action>
          <Input
            size="small"
            icon="add"
            placeholder="Escibe tu tarea..."
            iconPosition="left"
            onChange={onChangeTask}
            name="taskName"
            value={task.taskName}
          />

          <Select
            compact
            options={options}
            className="select-form-task"
            onChange={onChangeCategoryTask}
            name="categoryTask"
            value={task.categoryTask}
            placeholder="Categoría"
          />
          <Button type="submit" color="violet" onClick={onSubmitCita}>
            Añadir tarea
          </Button>
        </Input>
      </Grid>
      <Grid centered>
        {error && (
          <Header as="h4" color="red" className="alert-error-form">
            <Icon name="close" />
            <Header.Content>La tarea es obligatoria</Header.Content>
            <Icon name="close" />
          </Header>
        )}
      </Grid>
    </>
  );
}
