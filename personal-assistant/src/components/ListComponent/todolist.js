// js file for todo list
import React, { useState, useEffect } from 'react'
import { Container, Column, Column2, Form, StyledLink } from './listStyle'
import '../fonts.css'


const taskStorage = [
    {
        task: 'This is an example task :)',
    }
];


const TodoList = () => {

    // form stores all the task inputs from user
    const [form, setForm] = useState(taskStorage)
    const [task, setTask] = useState('')

    const handleChange = (element) => {
        setTask(element.target.value)
    }
    const handleAdd = () => {
        const newForm = form.concat({ task });

        setForm(newForm);
        setTask('');
    }
    const handleRemove = (task) => {

        const newForm = form.filter((d) => d.task !== task)

        setForm(newForm)
    }
    const FormPanel = ({ form }) => (
        <div >
            {form.map((d) => <li key={d.task} style={{ marginBottom: 10, fontSize: 18 }}>{d.task}


                <button type="button" onClick={() => handleRemove(d.task)}>
                    DONE
              </button></li>)}


        </div>
    )


    return (
        <Container>
            <Column>
                <h1>What is your main goal for today? </h1>
                <Form>
                    <label style={{ marginBottom: 15, fontFamily: 'Arvo' }}> Add a task here:
            </label>
                    <input type="text" value={task} onChange={handleChange} />
                    <button type="button" onClick={handleAdd}>ADD</button>

                </Form>
                <StyledLink to="/"> Back to home</StyledLink>

            </Column>
            <Column2>
                <h1> Your To-Do List </h1>
                <FormPanel form={form}></FormPanel>

            </Column2>
        </Container>


    )
}





export default TodoList