import React from 'react'
import { Link } from 'react-router'

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
