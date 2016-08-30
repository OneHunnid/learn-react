// Import needed dependencies
import ReactDOM from 'react-dom'
import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

// Import components you'll use for react-router
import Layout from './containers/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

const app = document.querySelector('.root');

// Create your routes inside the render.
// React-Router is witchcraft badassery
ReactDOM.render(
  <Router history={hashHistory}>
    <Route component={Layout}>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Route>
  </Router>,
  app
);
