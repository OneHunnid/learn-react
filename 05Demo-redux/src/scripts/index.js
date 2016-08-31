// Import needed dependencies
import ReactDOM from 'react-dom'
import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

// Import components you'll use for react-router
import Layout from './containers/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

// Imort Store
import store from './store/store'

const history = syncHistoryWithStore(hashHistory, store)
const app = document.querySelector('.root');

// Create your routes inside the render.
// React-Router is witchcraft badassery
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={Layout}>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Route>
    </Router>
  </Provider>,
  app
);
