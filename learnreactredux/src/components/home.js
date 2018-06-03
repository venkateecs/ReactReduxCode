import React,{Component} from 'react' ;
import {connect} from 'react-redux' ;
import {changeUser} from '../actions/user-actions' ;

class Home extends Component {
    constructor(props) {
       super(props);
       this.chgUSer = this.chgUSer.bind(this);
    }
    chgUSer() {
        this.props.homeUserChg('My New USerr Jsdsf')
    }
    render() {
        return(
            <div> 
                <h1>This is Home {this.props.homeUser}</h1>
                <button onClick={this.chgUSer}>ChangeUser</button>

            </div>
        )
    }
}
const mapStateToProps = (state,props)=> {
  return {
      homeUser: state.user
  }
}
const mapActionsToProps = {
    homeUserChg:changeUser
} 
export default connect(mapStateToProps,mapActionsToProps)(Home)  ;