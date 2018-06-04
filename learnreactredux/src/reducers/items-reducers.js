import {UPDATE_ITEMS} from '../actions/items-actions' ;
const initialState = {
  items:[
    {id:1,name:'testSriPada'}
  ]
} 

export default function changeItems(state=initialState,{type,payload}) {
  
  switch(type) {
     case UPDATE_ITEMS: state = {
       ...state,
       items:[...state.items,payload.items]
     }
     break;
     default : return state
  }
}