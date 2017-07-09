import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import registerServiceWorker from './registerServiceWorker';

import './index.css';

import reducer from './app/AppReducer';
import Auth from './auth/Auth';
import App from './app/App';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={ createStoreWithMiddleware(reducer) }>
        <Router>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/boards">Boards</Link></li>
                </ul>

                <hr/>

                <Route exact path="/" component={ App }/>
                <Route path="/boards" component={ App }/>
                <Route path="/login" component={ Auth }/>
            </div>
        </Router>
    </Provider>
    ,
    document.getElementById('root')
);
registerServiceWorker();
