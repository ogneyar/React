import React from 'react'
import './Tutorial.css';
import { Switch, Route, NavLink } from 'react-router-dom';
import Main from './Main'
import Test from './Test'


const Tutorial = () => {

    return (
        <div>
            <div className="tutorial-link">                
                <NavLink className="NavLink" to="/">Главная</NavLink>
                <NavLink className="NavLink" to="/tutorials/main">Tutorial</NavLink>
                <NavLink className="NavLink" to="/tutorials/test">Test</NavLink>
                
            </div>
            
            <div id="tutorial">
            
                <Switch>
                    <Route component={ Main } path="/tutorials/main" />
                    <Route component={ Test } path="/tutorials/test" />
                </Switch>

            </div>
        </div>
    )
}

export default Tutorial
