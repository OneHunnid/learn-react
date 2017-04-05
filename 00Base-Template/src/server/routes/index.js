import express, { Router } from 'express'
import proxy from 'http-proxy-middleware'
import { resolve } from 'path'
import { isDev } from '../utils'

const router = Router();
// const clientDir = resolve(`${__dirname}/../../client`);

if (isDev()) {
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpack = require('webpack')
  const webpackConfig = require('../../../webpack.config')
  const webpackHotMiddleware = require('webpack-hot-middleware')

  const compiler = webpack(webpackConfig)

  router.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
  }))

  router.use(webpackHotMiddleware(compiler))
}

// if (isDev()) {
//   router.use('/static', proxy({
//     changeOrigin: true,
//     target: 'http://localhost:8080'
//   }))
// }

// router.use(express.static(clientDir));
// router.get('*', (req, res) => res.sendFile(`${clientDir}/index.html`))

export default router
