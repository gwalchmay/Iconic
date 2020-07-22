import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Admin from './components/Admin.js';

function App() {
  return (
    <Router>
      <div className='appFlexContainer'>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Admin />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;