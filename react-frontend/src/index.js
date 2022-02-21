import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";
import {
  BrowserRouter as Router, Route
} from "react-router-dom";
const PORT = process.env.PORT || 5000
ReactDOM.render(
  <Router>
    <Route path="/" component={App}/>
  </Router>,
  document.getElementById('root')
);


