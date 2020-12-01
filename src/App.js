import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import { Home } from './pages/Home';
import { Foo } from './pages/Foo';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">

        <NavLink to="/">Go Home</NavLink>
        <NavLink to="/Foo">Go to Foo</NavLink>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Меняй <code>src/App.js</code> и сохрани для перезапуска.
        </p>
        
        <Switch>
          <Route component={ Home } path="/" exact />
          <Route component={ Foo } path="/Foo" />
        </Switch>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Изучай React
        </a>
      </header>
    </div>    
    </BrowserRouter> 
  );
}

export default App;
