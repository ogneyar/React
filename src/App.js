import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import Tutorial from './pages/tutorials/Tutorial';
import Test from './pages/tutorials/Test';

import './App.css';


function App() {
  
  return (
    <BrowserRouter>
        
        <Switch>
          <Route component={ Home } path="/" exact />
          <Route component={ Tutorial } path="/tutorials/main"  />       
          <Route component={ Tutorial } path="/tutorials/test" />         
        </Switch>
    
    </BrowserRouter> 
  );
}

export default App;
