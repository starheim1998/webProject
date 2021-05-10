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
import {persistStore} from "redux-persist";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage"
import {PersistGate} from "redux-persist/integration/react"
/**/
import itemReducer from "./store/reducers/itemReducer";
import cartReducer from "./store/reducers/cartReducer";
import accountReducer from "./store/reducers/accountReducer";
import navBarReducer from "./store/reducers/navBarReducer";
import orderReducer from "./store/reducers/orderReducer";
/**
 *
 */

const rootReducer = combineReducers({itemReducer, cartReducer,
    accountReducer, navBarReducer, orderReducer})

// const persistConfig = {
//     key: "root",
//     storage,
//     whitelist: [cartReducer, itemReducer]
// }
// const persistedReducer = persistReducer(persistConfig, rootReducer)
//
const reduxStore = createStore(
    rootReducer,
    compose(applyMiddleware(thunk))
)
//
// const persistor = persistStore(reduxStore)


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
