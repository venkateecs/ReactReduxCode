import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import getRootReducer from "./reducer";

export default function getStore(
  loginReducer,  
) {
    const thirdParty = compose(
        applyMiddleware(thunk),
        window.devToolsExtension && window.devToolsExtension()
    )
const persistedState = loadFromLocalStorage() ;  
  const store = createStore(
    getRootReducer(loginReducer),
    persistedState,
    thirdParty
  );
  store.subscribe(()=> saveToLocalStorage(store.getState()));
  return store;
}
function saveToLocalStorage(state) {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state',serializedState);
    } catch(e) {
      console.log(e);
    }
  }
  function loadFromLocalStorage() {
      try {
         const serializedState = localStorage.getItem('state');
         if (serializedState === null) return undefined ;
         return JSON.parse(serializedState);
      } catch(e) {
        console.log(e);
        return undefined ;
      }
  }