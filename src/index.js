import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from './components/Context';
import './index.css';
import './scss/portfolio2.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import "shards-ui/dist/css/shards.min.css"
import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<Provider>
    <App />
</Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
