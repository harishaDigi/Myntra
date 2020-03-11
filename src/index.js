import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Center from './Center'
import Loading from './Loading'
import Routing from './Routing'
import TodoApp from './Components/TodoApp'
import Myntra from './Components/Myntra'

ReactDOM.render(<Myntra />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
