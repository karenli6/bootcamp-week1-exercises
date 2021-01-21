// js file for todo list
import React, { useState } from 'react'
import { Container, Column, Column2, Form, StyledLink, SearchBar } from './listStyle'
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
        if (task !== "") {
            const newForm = form.concat({ task });

            setForm(newForm);
            setTask('');
        }

    }
    const handleRemove = (task) => {

        const newForm = form.filter((d) => d.task !== task)

        setForm(newForm)
    }
    // adds functionality to search
    const handleSearchChange = (e) => {
        let currentForm = [];
        let newForm = [];

        if (e.target.value !== "") {
            currentForm = form
            newForm = currentForm.filter(d => {
                // change current item to lowercase
                const item = d.task.toLowerCase();
                // change search term to lowercase
                const checking = e.target.value.toLowerCase();
                // check to see if the current list item includes the search term
                // If it does, it will be added to newList. Using lowercase eliminates
                // issues with capitalization in search terms and search content
                return item.includes(checking);
            });

            // console.log(newForm)
        
           
        } else {
            newForm = form
        }
        console.log(newForm)

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
                <SearchBar type="text" className="input" placeholder="Search..." onChange={handleSearchChange} />

                <FormPanel form={form}></FormPanel>

            </Column2>
        </Container>


    )
}





export default TodoList