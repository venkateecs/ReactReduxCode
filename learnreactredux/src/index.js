import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore,combineReducers,compose,applyMiddleware} from 'redux' ;
import thunk from 'redux-thunk' ;
import {Provider} from 'react-redux' ;
import changeUser from './reducers/user-reducers' ;
import changeItems from './reducers/items-reducers' ;
const allReducers = combineReducers({
    user:changeUser,
    items:changeItems
});
const thirdParty = compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()
)
const store = createStore(allReducers,{user:'TestDummy'},thirdParty) ;

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
