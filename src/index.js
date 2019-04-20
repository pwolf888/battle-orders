import React from 'react';
import ReactDOM from 'react-dom';
import './scss/styles.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';

import playerReducer from './reducers/add-player-reducer';
import nextPlayerReducer from './reducers/next-player-reducer';

const allReducers = combineReducers({players: playerReducer, nextPlayer: nextPlayerReducer});

const store = createStore(allReducers, {

    players: [
        {name: 'alex', roll: 30, monster: 'player-color'},
       {name: 'wolf', roll: 20, monster: 'monster-color'},
       
       {name: 'corey', roll: 40, monster: 'player-color'}

    ]

}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));

serviceWorker.unregister();
