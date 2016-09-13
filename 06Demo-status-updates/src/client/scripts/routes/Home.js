import React from 'react'

// Import our components
import StatusListContainer from './../containers/StatusListContainer'
import StatusBox from './../components/StatusBox'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <main className="container">
        <section className="col-6">
          <StatusListContainer />
        </section>
        <section className="col-6">
          <StatusBox />
        </section>
      </main>
    )
  }
}
