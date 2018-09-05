import React, { Component } from 'react';
import logo from '../../../logo.svg';
import '../../../App.css';
import $ from 'jquery';
import {connect} from 'react-redux' ;
import {saveloginDetails, handleLogin, saveLoginResponseData} from './modules/actions' ;
import * as jwtDecode from 'jwt-decode';
import  toastr from 'toastr';

class Login extends Component {
  constructor(props) {
    super(props);    
    this.state = {
        username:'',
        password:''
    }
    this.loginSave = this.loginSave.bind(this);
    this.chgUsername = this.chgUsername.bind(this);
    this.chgPassword = this.chgPassword.bind(this);
    this.checkValidation = this.checkValidation.bind(this);    
  }
  loginSave = (e)=> {    
      e.preventDefault();
      if (this.checkValidation()) {          
        let encryptEmail = btoa(this.state.username);
        let pushToken = window.navigator.userAgent.replace(/\D+/g, "") + encryptEmail;
        this.props.handleLogin(this.state.username, this.state.password, pushToken, 'desktop')
        .then((res)=> {            
            if (res.success) {
                this.props.saveLoginResponseData(res);         
                const userObj = jwtDecode(res.token);
                window.localStorage.setItem("userObj", JSON.stringify(userObj));
                window.localStorage.setItem("id_token", res.token);
                this.props.saveAuthData({name:this.state.username,password:this.state.password});
                this.props.history.push('/nested');
            } else {
                toastr.error(res.message);
            }                                 
        })
      } else {
          toastr.warning('Please Enter Credentials');
      }
  }
  checkValidation = () => {
      if (this.state.username === '' && this.state.password === '') {
          return false
      } else {
          return true
      }
  }
  chgUsername = async (e)=> {      
      await this.setState({username:e.target.value})
  }
  chgPassword = async (e)=> {
      await this.setState({password:e.target.value})    
  }
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        
        <div className="container">
        <div id="login-row" className="row justify-content-center align-items-center">
            <div id="login-column" className="col-md-6">
                <div className="box">
                    <div className="shape1"></div>
                    <div className="shape2"></div>
                    <div className="shape3"></div>
                    <div className="shape4"></div>
                    <div className="shape5"></div>
                    <div className="shape6"></div>
                    <div className="shape7"></div>
                    <div className="float">
                        <form className="form" action="">
                            <div className="form-group">
                                <label  className="text-white">Username:</label><br/>
                                <input type="text" onChange={this.chgUsername} name="username" id="username" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label className="text-white">Password:</label><br/>
                                <input type="password" onChange={this.chgPassword} name="password" id="password" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <input type="submit" onClick={this.loginSave} name="submit" className="btn btn-info btn-md" value="submit"/>
                            </div> 
                        </form>
                    </div> 
                </div>
          </div>
        </div>
    </div>
        
      </div>
    );
  }
}

const mapStateToProps = (state,props) => {    
    return {
      authData: state.login.loginData,
    }
  }
  const mapActionsToProps = {
    saveAuthData: saveloginDetails,
    handleLogin: handleLogin,
    saveLoginResponseData: saveLoginResponseData    
  }
  export default connect(mapStateToProps,mapActionsToProps)(Login) ;
