import {
  SAVE_LOGINDATA,
  SAVE_HANDLEDATA
} from './actions';
const initialState = {
  loginData: {},
  loginResponseData: {}
}
export default function saveLoginData(state = initialState, {type,payload}) {
  switch (type) {
    case SAVE_LOGINDATA:
      return {
        ...state,
        loginData: Object.assign({}, payload.loginData)
      }
    case SAVE_HANDLEDATA:
      return {
        ...state,
        loginResponseData: Object.assign({}, payload.loginResponseData)
      }
      break;
    default:
      return state
  }
}