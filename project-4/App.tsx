import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Routes } from './Routes';
import rootReducer from './store/rootReducer';

export default function App() {

    const middlewares = [thunk];

    const store = createStore(rootReducer, applyMiddleware(...middlewares));

    return (
    <Provider store={store}>

    <Routes/>

    </Provider>
    )
}


