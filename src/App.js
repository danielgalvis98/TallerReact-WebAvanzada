import React from 'react';
import './App.css';
import Dependencies from './components/Dependencies/Dependencies'
import Users from './components/Users/Users'
import Menu from './components/Menu/Menu'
import Login from './components/auth/LoginView'
import Register from './components/auth/RegisterView'
import Error from './components/errors/NotFoundView'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <div className="App">
     
      <Router>
      <Menu />
        <Switch>
        <Route path="/users">
          <Users></Users>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
    

        <Route path="/dependencies">
          <Dependencies></Dependencies>
        </Route>
        <Route exact path="/">
        <Login></Login>
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
