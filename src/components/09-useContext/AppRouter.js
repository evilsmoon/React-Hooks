import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { AboutSreen } from './AboutSreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';
import { NavBar } from './NavBar';
export const AppRouter = () => {
    return (
           <Router>
               <div>
                   <NavBar />
                   <div className='container'>

                   <Switch>
                       <Route exact path='/' component={ HomeScreen }/>
                       <Route exact path='/about' component={ AboutSreen }/>
                       <Route exact path='/login' component={ LoginScreen }/>
                       <Redirect to="/" />
                   </Switch>
                   </div>
               </div>
           </Router> 
    )
}
