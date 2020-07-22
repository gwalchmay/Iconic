import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Heroes from './components/Heroes.js';
import Ages from './components/Ages.js';
import Admin from './components/Admin.js';

function App() {
  return (
    <Router>
      <div className='appFlexContainer'>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/heroes">
            <Heroes />
          </Route>
          <Route path="/ages">
            <Ages />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;