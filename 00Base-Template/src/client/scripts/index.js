import ReactDOM from 'react-dom'
import React from 'react'
import { Router, Route, IndexRoute, browserHistory, hashHistory, useRouterHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

// Containers
import MainLayout from './containers/MainLayout'

// Routes
import Home from './routes/Home'
import NotFound from './routes/NotFound'

// Store
import store from './store/store'

// History
const history = syncHistoryWithStore(hashHistory, store);

// App Entry Point
const app = document.querySelector('.root');

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={MainLayout}>
        <Route path="/" component={Home} name="home"/>
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>,
  app
);
