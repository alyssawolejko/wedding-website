import React, {Component} from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navigation from './shared/components/Navigation'

import Home from './screens/Home';
import './App.scss';
import Accomodations from './screens/Accomodations';

export default class App extends Component{
  render(){
    return (
      <Router basename="/">
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          {/* <Route path="/venue">
            <Venue />
          </Route> */}
          <Route path="/accomodations">
            <Accomodations />
          </Route>
        </Switch>
      </Router>
    );
  }
}
