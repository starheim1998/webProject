import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/*ROUTER*/
import {BrowserRouter} from "react-router-dom";
/*REDUX*/
import {Provider} from 'react-redux';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
/**/
import itemReducer from "./store/reducers/itemReducer";
import accountReducer from "./store/reducers/accountReducer";

/**
 *
 */

const rootReducer = combineReducers({itemReducer, accountReducer})

const reduxStore = createStore(
    rootReducer,
    compose(applyMiddleware(thunk))
)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={reduxStore}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
