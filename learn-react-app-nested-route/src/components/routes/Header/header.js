import React, { Component } from 'react';
import $ from 'jquery';

class Header extends Component {
  constructor(props) {
     super(props);     
  }  
  componentWillMount() {            
  }
  render() {
    return (      
      <div>         
         <h1>Hello Welcome To Header Page</h1>
      </div>   
    );
  }
}

export default Header;
