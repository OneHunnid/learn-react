import React from 'react'
import Home from './Home'

// This is a smart component, or stateful.
// It handles data and passes it to it's children.
export default class Layout extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Home name="John"/>
    )
  }
}
