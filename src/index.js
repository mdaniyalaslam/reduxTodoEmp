import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import About from './About';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './Store/reducers';


const render = () => ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

render();
store.subscribe(render)


