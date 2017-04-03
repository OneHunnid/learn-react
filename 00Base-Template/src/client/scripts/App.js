import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Routes
import Home from './routes/Home'
import Typography from './routes/Typography'
import NotFound from './routes/NotFound'

// Components
import Header from './components/Header'


export default class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Router>
        <div>
          <Header />
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/typography" component={Typography} />
              <Route component={NotFound}/>
            </Switch>
          </main>
        </div>
      </Router>
    )
  }
}
