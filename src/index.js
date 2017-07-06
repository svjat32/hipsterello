import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import auth from './auth/Auth'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
