import React from 'react'

// This is a dumb component or Stateless
// It only displays data it is given.
export default class Home extends React.Component {
  render() {
    return (
      <div>Hello {this.props.name}!</div>
    )
  }
}
