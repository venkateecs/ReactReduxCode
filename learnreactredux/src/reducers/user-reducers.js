import {UPDATE_USER} from '../actions/user-actions' ;
const initialState= {
  user:''
}
export default function changeUser(state=initialState,{type,payload}) {
  switch(type) {
     case UPDATE_USER: return payload.user
     default : return state
  }
}