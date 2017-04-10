import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from '../../client/scripts/App'

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

export default handleRender;
