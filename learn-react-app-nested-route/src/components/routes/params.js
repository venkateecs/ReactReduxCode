import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import $ from 'jquery';
import {connect} from 'react-redux' ;

class Params extends Component {
  constructor(props) {
     super(props);     
   } 
   async componentDidMount() {     
   }  
  render() {
    return (
      <div>          
          <h1>This is Params {this.props.match.params.name}</h1>
      </div>                      
    )
  }
}

const mapStateToProps = (state,props) => {   
  return {
    authData: state.login.loginData,
  }
}
export default connect(mapStateToProps)(Params) ;



