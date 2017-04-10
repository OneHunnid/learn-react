import express from 'express'
import routes from './routes'
import { assets, handleRender } from './middleware'

// Create Express App
const app = express();

// Set the port for our server
app.set('port', process.env.PORT || 3000)

// Use routes to check if the environment is prod || dev
app.use(assets)
app.use(routes)
app.use(handleRender)

export default app
