import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import App from './App';
import DetailComponent from './pages/DetailComponent'

// Importing the Bootstrap CSS
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './theme.scss'

ReactDOM.render(
      <Router> 
        <Switch>
            <Route exact path="/" render={App} />
            <Route path="/detail" render={DetailComponent} />
        </Switch>
      </Router>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();