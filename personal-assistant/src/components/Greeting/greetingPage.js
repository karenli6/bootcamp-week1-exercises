// js file for todo list
import React, { useState, useEffect } from 'react'
import { Container,Row, Row2, Column2, StyledLink} from './greetingStyle'
import '../fonts.css'




const GreetingPanel = () => {


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


    // updating weather
    const [weather, setWeather] = useState('')
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=naples&appid=886705b4c1182eb1c69f28eb8c520e20')
            const data = await res.json()
            setWeather(data.weather[0].description)
        }
        fetchData()
    }, [])
    return (
        <Container>
            <Row>
            <Column2>
                <h1> hello. </h1>

            </Column2>

                <p>I'm your personal task manager : ) Nice to meet you!</p>
                <p> It is currently {date.toLocaleTimeString()}, and today's weather indicates {weather}.</p>

                </Row>
            <Row2 >
                <StyledLink to="/todo"> Let's get some work done!</StyledLink>
            </Row2>
        </Container>


    )
}

export default GreetingPanel