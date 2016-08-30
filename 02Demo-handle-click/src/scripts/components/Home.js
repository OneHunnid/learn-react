import React from 'react'

export default class Home extends React.Component {
  constructor() {
    super()
  }
  handleClick() {
    alert("You clicked a button!")
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>Click me</button>
      </div>
    )
  }
}
