import React from 'react';
import './App.css';
import Dependencies from './components/Dependencies/Dependencies'
import Users from './components/Users/Users'
import Menu from './components/Menu/Menu'
import Login from './components/auth/LoginView'
import Error from './components/errors/NotFoundView'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <div className="App">
     
      <Router>
      <Menu />
        <Switch>
        <Route path="/login">
          <Login></Login>
        </Route>
    

        <Route path="/dependencies">
          <Dependencies></Dependencies>
        </Route>
        <Route exact path="/">
          <Users></Users>
        </Route>

        <Route path="*">
          <Error></Error>
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
