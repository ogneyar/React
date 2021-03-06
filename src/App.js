import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import Tutorial from './pages/tutorials/Tutorial';

import './App.css';


function App() {
  
  return (
    <BrowserRouter>
        
        <Switch>
          <Route component={ Home } path="/" exact />
          <Route component={ Tutorial } path="/tutorials"  />       
          <Route component={ Tutorial } path="/test" />         
        </Switch>
    
    </BrowserRouter> 
  );
}

export default App;
