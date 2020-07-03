import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import * as serviceWorker from './serviceWorker';
import 'normalize.css';
import './styles/styles.scss';
import Santiago from "./components/Santiago";
import Header from './components/Header';

ReactDOM.render(
  <React.StrictMode>
  <Header />
    <Santiago />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
