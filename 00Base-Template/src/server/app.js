import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { resolve } from 'path'
import routes from './routes'

// Imports our React App
import App from '../client/scripts/App'

// Create Express App
const app = express();

// Set the port for our server
app.set('port', process.env.PORT || 3000)

// Use routes to check if the environment is prod || dev
app.use(routes)

// Use handleRender for SSR
app.use(handleRender)

function handleRender(req, res) {
  const context = {};

  const html = renderToString(
    <StaticRouter location={req.url} context={context} >
      <App/>
    </StaticRouter>
  )

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    })
    res.end()
  } else {
    res.write(`
      <!doctype html>
      <head>
        <title>Redux Universal Example</title>
        <link rel="stylesheet" type="text/css" href="/static/bundle.css">
      </head>
      <body>
        <div id="app">${html}</div>
        <script type="javascript" src="/static/bundle.js"></script>
      </body>
    `)
    res.end()
  }
}

export default app
