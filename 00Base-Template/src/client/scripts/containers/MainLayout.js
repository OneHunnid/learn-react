import React from 'react'
import Header from '../components/Header'

export default class MainLayout extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Header />
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}
