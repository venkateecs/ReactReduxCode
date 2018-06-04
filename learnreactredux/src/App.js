import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux' ;
import {changeUser} from './actions/user-actions' ;
import {changeItems} from './actions/items-actions' ;
import {getPostAPI,updatePostdata} from './actions/posts-actions' ;
import Home from './components/home' ;
class App extends Component {
  constructor(props) {
    super(props) ;
    this.inputChgUser = this.inputChgUser.bind(this);
    this.insertItems = this.insertItems.bind(this);
    this.updPost = this.updPost.bind(this);
  }
  inputChgUser(e) {
    this.props.chgUser(e.target.value);
  }
  insertItems() {
    this.props.chgItems({id:2,name:'testRamana'});
    console.log(this.props.appItems.length);
  }
  componentWillMount(){
    this.props.getPostsData();
  }
  updPost() {
    this.props.updPost({
      "userId": 1,
      "id": 1,
      "title": "test title",
      "body": "test body"
    })
    console.log('after==>',this.props)
  }
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>Update User</div>
        <input type="text" onChange={this.inputChgUser}/>
        <h1>{this.props.appUser}</h1>
        <Home/>
        <button onClick={this.insertItems}>ItemsInsert</button>
        <h1>
          {this.props.appItems.length}
        </h1>
        <button onClick={this.updPost}>UpdatePost</button>
      </div>
    );
  }
}

const mapStateToProps = (state,props) => {
  return {
    appUser: state.user,
    appItems:state.items.items,
    posts:state.posts.posts
  }
}
const mapActionsToProps = {
  chgUser: changeUser,
  chgItems:changeItems,
  getPostsData:getPostAPI,
  updPost:updatePostdata
}
export default connect(mapStateToProps,mapActionsToProps)(App) ;
