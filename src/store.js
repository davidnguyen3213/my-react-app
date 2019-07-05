import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from 'redux-logger';
import mathReducer from './reducers/mathReducer';
import userReducer from './reducers/userReducer';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
const store = createStore(combineReducers({ 
    mathReducer,
    userReducer
}), {}, applyMiddleware(logger, thunk, promise));
export default store;