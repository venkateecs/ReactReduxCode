import React, { Component } from 'react';
import logo from './logo.svg';
import { render } from 'react-dom';
import './App.css';
import Login from './components/routes/Login/login';
import Dashboard from './components/routes/Dashboard/dashboard';
import Home from './components/routes/Home/home';
import Child from './components/routes/child';
import  NestedView  from './components/routes/Nested';
import Params from './components/routes/params';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div>          
            <Route exact path='/' component={Login} />            
            <Route exact path='/dashboard' component={Dashboard} />
            <Route  path='/dashboard/:name' component={Params} />
            <Route path="/nested" component={NestedView} /> 
        </div>
      </Router>
    );
  }
}
export default App;



