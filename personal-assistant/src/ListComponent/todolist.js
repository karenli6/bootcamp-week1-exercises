// js file for todo list
import React, { useState, useEffect } from 'react'
import { Container, Column, Column2, Form, StyledLink } from './listStyle'
import './fonts.css'
import {Link} from 'react-router-dom'


const taskStorage = [
    {
        name: 'task1',
        id: 'a'
    },
    {
        name: 'task2',
        id: 'b'
    },
];


const TodoList = () => {

    // form stores all the inputs
    const [form, setForm] = useState(taskStorage)
    const [name, setName] = useState('')

    const handleChange = (event) => {
        setName(event.target.value)
    }
    const handleAdd = () => {
        const newForm = form.concat({ name, id: 'c' });

        setForm(newForm);
        setName('');
    }
    const handleRemove = (name) => {
        console.log("REMOVING")
        console.log(name)
        const newForm = form.filter((d) => d.name !== name)

        setForm(newForm)
    }
    const FormPanel = ({ form }) => (
        <div >
            {form.map((d) => <li key={d.name} style={{ marginBottom: 10, fontSize: 18 }}>{d.name}


                <button type="button" onClick={() => handleRemove(d.name)}>
                    DONE
              </button></li>)}


        </div>
    )

    // updating time here 
    let [date, setDate] = useState(new Date())

    useEffect(() => {
        let timer = setInterval(() => {
            setDate(new Date(), 1000)
        })

        return function cleanup() {
            clearInterval(timer)
        }
    })


    // // updating weather
    // const [weather, setWeather] = useState('')
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=naples&appid=886705b4c1182eb1c69f28eb8c520e20')
    //         const data = await res.json()
    //         setWeather(data.weather[0].description)
    //     }
    //     fetchData()
    // }, [])
    return (
        <Container>
            <Column>
                <h1>What is your main goal for today? </h1>

                <Form>
                    <label style={{ marginBottom: 15, fontFamily: 'Arvo' }}> Add a task here:
            </label>
                    <input type="text" value={name} onChange={handleChange} />
                    <button type="button" onClick={handleAdd}>
                        ADD
        </button>

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