import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/routes/Login/login';
import Dashboard from './components/routes/Dashboard/dashboard';
import Home from './components/routes/Home/home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import $ from 'jquery'

class App extends Component {
  render() {
    return (
     <Router>
        <div>         
          <Switch>
            <Route exact path='/' component={Login} />            
            <Route exact path='/dashboard/:childRoutes' component={Dashboard} />            
          </Switch>
        </div>
     </Router>    
    );
  }
}

export default App;
