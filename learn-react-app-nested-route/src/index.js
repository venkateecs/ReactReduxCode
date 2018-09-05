import React from 'react';
//import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import '../node_modules/popper.js/dist/popper.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/toastr/build/toastr.min.js';
import '../node_modules/toastr/build/toastr.min.css';
import './index.css';
import App from './App';
import {createStore,combineReducers,compose,applyMiddleware} from 'redux' ;
import thunk from 'redux-thunk' ;
import {Provider, connect} from 'react-redux' ;
import getStore from './store/store';
import saveLoginData from './components/routes/Login/modules/reducer' ;
import registerServiceWorker from './registerServiceWorker';

const allReducers = combineReducers({
    auth:saveLoginData,    
});
const thirdParty = compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()
)
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
  /*const persistedState = loadFromLocalStorage() ;
  const store = createStore(allReducers,persistedState,thirdParty);
  store.subscribe(()=> saveToLocalStorage(store.getState()));
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));*/


const mapStateToProps = state => ({
  login: state.login,  
});

const AppWithNavigationState = connect(mapStateToProps)(App);

const store = getStore(saveLoginData);
render(<Provider store={store}><AppWithNavigationState /></Provider>, document.getElementById('root'));
//ReactDOM.render(<Provider store={store}><AppWithNavigationState /></Provider>, document.getElementById('root'));

registerServiceWorker();

