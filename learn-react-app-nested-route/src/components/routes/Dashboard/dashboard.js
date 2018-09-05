import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import $ from 'jquery';
import Home from '../Home/home';
import Header from '../Header/header';
import {connect} from 'react-redux' ;
import Child from '../child';

class Dashboard extends Component {
  constructor(props) {
     super(props);
     this.chgHeader = this.chgHeader.bind(this);
     this.chgHome = this.chgHome.bind(this);
     this.state = {
       'name':''
     }
  }
  async chgHome() {
    //await this.setState({name:'home'});
    this.props.history.push('/dashboard/home');
  }
 async chgHeader() {
  //await this.setState({name:'header'});
  this.props.history.push('/dashboard/header');
 }
componentDidMount() {
  debugger
 }
  render() {
    return (
      <div>
        <button onClick={this.chgHeader}>Header</button>
        <button onClick={this.chgHome}>Home</button>
        <Child data= {this.state.name}></Child>
      </div>
                  
    )
  }
}

const mapStateToProps = (state,props) => {   
  return {
    authData: state.login.loginData,
  }
}
export default connect(mapStateToProps)(Dashboard) ;



