import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from 'redux-logger';
const initialState = {
    result: 100,
    lastValues: []
};

const mathReducer = (state = {
    result: 100,
    lastValues: []
}, action) =>{
    switch (action.type){
        case "ADD":
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            //state.lastValues.push(action.payload);
            // state.result += action.payload
            break;
        case "SUBTRACT":
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            //state.lastValues.push(action.payload);
            break; 
    }
    return state;
};

const userReducer = (state = {
    name: "Max",
    age: 27
}, action) => {
    switch (action.type) {
        case "SET_Name":
            state = {
                ...state,
                name: action.payload,
            };
            //state.lastValues.push(action.payload);
            // state.result += action.payload
            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload,
            };
            //state.lastValues.push(action.payload);
            break;
    }
    return state;
};

const store = createStore(combineReducers({ mathReducer, userReducer }), {}, applyMiddleware(logger));


store.subscribe(() => {
    //console.log("store", store.getState());
})
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// import { createStore, combineReducers, applyMiddleware } from "redux";
// import logger from 'redux-logger';
// const initialState = {
//     result: 100,
//     lastValues: []
// };

// const mathReducer = (state = {
//     result: 100,
//     lastValues: []
// }, action) =>{
//     switch (action.type){
//         case "ADD":
//             state = {
//                 ...state,
//                 result: state.result + action.payload,
//                 lastValues: [...state.lastValues, action.payload]
//             };
//             //state.lastValues.push(action.payload);
//             // state.result += action.payload
//             break;
//         case "SUBTRACT":
//             state = {
//                 ...state,
//                 result: state.result - action.payload,
//                 lastValues: [...state.lastValues, action.payload]
//             };
//             //state.lastValues.push(action.payload);
//             break; 
//     }
//     return state;
// };

// const userReducer = (state = {
//     name: "Max",
//     age: 27
// }, action) => {
//     switch (action.type) {
//         case "SET_Name":
//             state = {
//                 ...state,
//                 name: action.payload,
//             };
//             //state.lastValues.push(action.payload);
//             // state.result += action.payload
//             break;
//         case "SET_AGE":
//             state = {
//                 ...state,
//                 age: action.payload,
//             };
//             //state.lastValues.push(action.payload);
//             break;
//     }
//     return state;
// };

// const store = createStore(combineReducers({ mathReducer, userReducer }), {}, applyMiddleware(logger));


// store.subscribe(() => {
//     //console.log("store", store.getState());
// })


// store.dispatch({
//     type: "ADD",
//     payload: 10
// });
// store.dispatch({
//     type: "SUBTRACT",
//     payload: 12
// });
// store.dispatch({
//     type: "SET_Name",
//     payload: 'david'
// });
// store.dispatch({
//     type: "SET_AGE",
//     payload: 28
// });
