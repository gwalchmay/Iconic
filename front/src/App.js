import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Heroes from './components/Heroes.js';
import Ages from './components/Ages.js';
import SceneFull from './components/SceneFull.js';
import Scenes from './components/Scenes.js';
import Login from './components/Login.js';
import Admin from './components/Admin.js';
import PrivateRoute from './components/PrivateRoute.js';
import BurgerMenu from './components/BurgerMenu.js';

function App() {
  return (
    <Router>
      <div className='appFlexContainer'>
        <Navbar />
        <BurgerMenu />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/scenes/:tag" component={Scenes} />
          <Route path="/scene/:id" component={SceneFull} />
          <Route path="/heroes">
            <Heroes />
          </Route>
          <Route path="/ages">
            <Ages />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute component={Admin} path="/admin" exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;