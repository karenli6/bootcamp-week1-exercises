import React from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import TodoList from './ListComponent/todolist'
import Greeting from './Greeting/greetingPage'



const App = () => (

  <BrowserRouter>
    <Switch>
    <Route path="/todo">
        <TodoList />
      </Route>
      <Route path="/">
        <Greeting />
      </Route>



    </Switch>
  </BrowserRouter>

)


export default App
