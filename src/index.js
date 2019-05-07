import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyles from './globalStyles';
import Routes from './Routes';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import homeReducer from './containers/Home/reducers';

const middleware = [thunk, createLogger()];

const store = createStore(
    combineReducers({
        details: homeReducer
    }),
    applyMiddleware(...middleware)
);

ReactDOM.render(
    <Provider store={store}>
        <GlobalStyles />
        <Routes />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
