import express from 'express'
import routes from './routes'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router'

import store from '../client/scripts/store/store'
import App from '../client/scripts/App'

const app = express();

app.set('port', process.env.PORT || 3000)

app.use(routes)
app.use(handleRender)

function handleRender(req, res) {
  const context = {}

  const html = renderToString(
    <StaticRouter location={req.url} context={context}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  )

  const preloadedState = store.getState()

  res.send(renderFullPage(html, preloadedState))
}

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
        <link rel="stylesheet" href="/static/bundle.css">
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script type="javascript" src="/static/bundle.js"></script>
      </body>
    </html>
  `
}

export default app
