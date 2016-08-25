import React from 'react'

// This is a dumb component or Stateless
// It only displays data it is given through props
export default class Home extends React.Component {
  render() {
    return (
      <div>Elapsed time: {this.props.time}</div>
    )
  }
}
