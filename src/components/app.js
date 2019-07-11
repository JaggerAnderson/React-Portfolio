import React, { Component } from 'react';
import moment from "moment";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import NavigationContainer from './Navigation/Navigation-Container';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import PortfolioDetail from './Portfolio/Portfolio-Detail';
import NoMatch from './pages/No-Match'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
            <h1>Jagger Anderson Portfolio</h1>
        <div>{moment().format('MMM Do YYYY, h:mm:ss a')}</div>
      <Router>
        <div>
      <NavigationContainer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about-me" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />
          <Route exact path="/portfolio/:slug" component={PortfolioDetail} />
          <Route component={NoMatch} />
        </Switch>
        </div>
      </Router>
      </div>
    );
  }
}