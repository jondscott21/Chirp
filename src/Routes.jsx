import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'

const Routes= () => {
    return(
        <Switch>
            <Route exact path='/' render={(props) => <Home { ...props} />} />
            <Route exact path='/login' render={(props) => <Login { ...props} />} />
            <Route exact path='/home' render={(props) => <Home { ...props} />} />
            <Route exact path='/signup' render={(props) => <Signup { ...props} />} />
        </Switch>
    )
}

export default Routes