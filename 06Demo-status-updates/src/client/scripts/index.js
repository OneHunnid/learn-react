import ReactDOM from 'react-dom'
import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

import Home from './routes/Home'

// Import the Store
import store from './store/store'

// Create app history by syncing hashHistory with the Store
const history = syncHistoryWithStore(hashHistory, store)

const app = document.querySelector('.root');

// Add a provider, this allows us to connect the Store to our app
// The first Router accepts the app's History
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Home} />
    </Router>
  </Provider>,
  app
);
