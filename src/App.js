import React from 'react';
import './App.css';
import Dependencies from './components/Dependencies/Dependencies'
import Menu from './components/Menu/Menu'
import Login from './components/auth/LoginView'
import Error from './components/errors/NotFoundView'
import Register from './components/auth/RegisterView'
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
        <Route path="/register">
          <Register></Register>
        </Route>

        <Route path="/">
          <Dependencies></Dependencies>
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
