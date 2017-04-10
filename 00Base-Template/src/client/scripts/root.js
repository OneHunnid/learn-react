import ReactDOM from 'react-dom'
import React from 'react'
// import { Provider } from 'react-redux'
// import { ConnectedRouter } from 'react-router-redux'
import { BrowserRouter } from 'react-router-dom'
// import createHistory from 'history/createBrowserHistory'
import App from './App'
// import store from './store/store'

// const history = createHistory()

export default class Root extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
  }
}
