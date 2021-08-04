import { Select, Input, Button, Grid } from 'semantic-ui-react'
import { useState } from 'react';

const options = [
    { key: 'deporte', text: 'Deporte', value: 'deporte' },
    { key: 'casa', text: 'Casa', value: 'casa' },
    { key: 'oficina', text: 'Oficina', value: 'oficina' },
    { key: 'otra', text: 'Otra', value: 'otra' },
]

export default function InputTask() {
    // Creamos estados
    const [task, setTask] = useState({
        taskName: '',
        categoryName: ''
    });

    // Cuando cambia recogemos valor
    const onChangeTask = (e) => {
        console.log(e.target.value);
        setTask({
            [e.target.name]: e.target.value
        })
    }

    // Cuando se presiona agregar cita

    const onSubmitCita = (e) => {
        // para que no recargue la página
        e.preventDefault();
        console.log("enviando");

        // Validar

        // asignamos ID

        // Crear la tarea


        // Limpiamos input
    }

    return (
        <Grid centered columns={2}>
            <Input type='text' action >
                <Input size='small' icon='add' placeholder='Escibe tu tarea...' iconPosition='left' onChange={onChangeTask}
                    name="taskName"
                />
                <Select compact options={options} defaultValue='otra' />
                <Button type='submit' color="violet" onClick={onSubmitCita}>Añadir tarea</Button>
            </Input>
        </Grid>
    )
};
