import { combineReducers } from "redux";

export default function getRootReducer(
  loginReducer,  
) {
  return combineReducers({
    login: loginReducer,    
  });
}
