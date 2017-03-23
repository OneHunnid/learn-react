import path from 'path'
import express from 'express'
import routes from './routes'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import store from '../client/scripts/store/store'
import MainLayout from '../client/scripts/containers/MainLayout'

const app = express();

app.set('port', process.env.PORT || 3000)

app.use(routes)
app.use(handleRender)

function handleRender(req, res) {
  const storeNew = createStore(store)

  const html = renderToString(
    <Provider store={storeNew}>
      <MainLayout />
    </Provider>
  )

  const preloadedState = storeNew.getState()

  res.send(renderFullPage(html, preloadedState))
}

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
}

export default app
