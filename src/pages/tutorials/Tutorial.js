import React from 'react'
import './Tutorial.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Test from './Test'
import Test2 from './Test2'


const Tutorial = () => {

    return (
        <BrowserRouter>
            <div className="tutorial-link">
                <a href="/" style={{padding: "10px"}}>Главная</a>
                {/* <NavLink className="NavLink" to="/">Главная</NavLink> */}
                <NavLink className="NavLink" to="/tutorials">Tutorial</NavLink>
                <NavLink className="NavLink" to="/test">Test</NavLink>
                
            </div>
            
            <div id="tutorial">
            
                <Switch>
                    <Route component={ Test } path="/tutorials" />
                    <Route component={ Test2 } path="/test" />
                </Switch>

            </div>
        </BrowserRouter>
    )
}

export default Tutorial
