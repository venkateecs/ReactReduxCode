import React, {Component} from 'react';
import { Link, Route } from "react-router-dom";

class SubView extends Component {
    constructor(props) {
       super(props);     
     } 
     async componentDidMount() {    
     }  
    render() {
      return (
        <div>
            <h3>Section: {this.props.match.params.sectionName}</h3>
        </div>                      
      )
    }
  }

  export default SubView