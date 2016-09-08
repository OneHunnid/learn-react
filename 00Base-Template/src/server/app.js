import express from 'express'
import routes from './routes'

const app = express();

app.set('port', process.env.PORT || 3000)

app.use(routes)

export default app
