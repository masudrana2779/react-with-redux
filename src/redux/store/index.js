import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducers from '../reducers'



// const composeEnhancers = process.env.NODE_ENV !== "production" &&
// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
//
// const enhancer = composeEnhancers(
//     applyMiddleware(thunk)
// );

const store = createStore(rootReducers,{},composeWithDevTools(applyMiddleware(thunk)));
export default store;