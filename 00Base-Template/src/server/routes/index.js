import express, { Router } from 'express'
import { resolve } from 'path'
import { isDev } from '../utils'

const router = Router();
const clientDir = resolve(`${__dirname}/../../client`);

if (isDev()) {
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpack = require('webpack')
  const webpackConfig = require('../../../webpack.config')
  const webpackHotMiddleware = require('webpack-hot-middleware')

  const compiler = webpack(webpackConfig)

  // This compiles our app using webpack
  router.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
  }))

  // This connects our app to HMR using the middleware
  router.use(webpackHotMiddleware(compiler))
}

router.use(express.static(clientDir));

export default router
