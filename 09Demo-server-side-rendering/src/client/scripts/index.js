import ReactDOM from 'react-dom'
import React from 'react'
import { createStore } from 'redux'
import { Router, Route, IndexRoute, browserHistory, hashHistory, useRouterHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

// Containers
import MainLayout from './containers/MainLayout'

// Routes
import Home from './routes/Home'
import NotFound from './routes/NotFound'

// Reducers
import reducers from './reducers'

const preloadedState = window.__PRELOADED_STATE__

delete window.__PRELOADED_STATE__

const storeNew = createStore(reducers, preloadedState)

// History
const history = syncHistoryWithStore(browserHistory, storeNew);

// App Entry Point
const app = document.querySelector('#root');

ReactDOM.render(
  <Provider store={storeNew}>
    <Router history={history}>
      <Route component={MainLayout}>
        <Route path="/" component={Home} name="home"/>
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>,
  app
);
