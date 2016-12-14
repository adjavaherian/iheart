import React, { Component } from 'react';
import ReacDOM from 'react-dom';
import axios from 'axios';
import querystring from 'query-string';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import artists from './reducer';
import FlexGrid from './FlexGrid';

const store = createStore(
    artists,
    compose(
        applyMiddleware(thunkMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

function App() {
    return (
        <Provider store={store} >
            <FlexGrid />
        </Provider>
    );
}

ReacDOM.render(<App />, window.document.getElementById('container'));
