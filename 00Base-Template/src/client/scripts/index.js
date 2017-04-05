import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { BrowserRouter } from 'react-router'

import createHistory from 'history/createBrowserHistory'
const history = createHistory()

// Containers
import App from './App'

// Store
import store from './store/store'

// App Entry Point
const root = document.querySelector('.root');

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </BrowserRouter>,
  root
);
