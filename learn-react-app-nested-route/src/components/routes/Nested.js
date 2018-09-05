import React, {Component} from 'react';
import { Link, Route } from "react-router-dom";
import SubView from './subview';

class NestedView extends Component {
    constructor(props) {
       super(props);     
     } 
     async componentDidMount() {    
     }  
    render() {
      return (
        <div>
      <Route exact path={this.props.match.url} render={() => (
        <h3>Please select a section:</h3>
      )}/>
      <Link to={`${this.props.match.url}/info`}>Info - </Link>
      <Link to={`${this.props.match.url}/about`}>About - </Link>
      <Link to={`${this.props.match.url}/contacts`}>Contact</Link>
      <Route path={`${this.props.match.url}/:sectionName`} component={SubView}/>
        </div>                      
      )
    }
  }
export default NestedView