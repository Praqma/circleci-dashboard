import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from "react-router-dom";
import './index.css';
import Dashboard from './Dashboard';
import Config from './Config';

ReactDOM.render(
  <Router>
    <div>
      <Route path="/" exact component={Dashboard} />
      <Route path="/repos/:repofilter" component={Dashboard} />
      <Route path="/branches/:branchfilter" component={Dashboard} />
      <Route path="/filter/:repofilter/:branchfilter" component={Dashboard} />
      <Route path="/config" component={Config} />
    </div>
  </Router>,
  document.querySelector("#dashboard"))
