import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import $ from 'jquery';
import Home from '../Home/home';
import Header from '../Header/header';
import {connect} from 'react-redux' ;

class Dashboard extends Component {
  constructor(props) {
     super(props);
  }  
  componentDidMount() {    
  }
  render() {
    return (
       <div>
           <h1>this is Dashboard page {this.props.authData.name}</h1>           
        <Router>            
        <div>         
          <Switch>
            <Route exact path='/dashboard/home' component={Home} />
            <Route exact path='/dashboard/header' component={Header} />            
          </Switch>
        </div>
       </Router>
       </div>                 
    )
  }
}

const mapStateToProps = (state,props) => {   
  return {
    authData: state.auth.loginData,
  }
}
export default connect(mapStateToProps)(Dashboard) ;
