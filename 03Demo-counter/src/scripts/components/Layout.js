import React from 'react'
import Home from './Home'

// This is a smart component, or stateful.
// It handles data and passes it to it's children.
export default class Layout extends React.Component {
  constructor(props) {
    super(props)
    // Need to set the state of the component in the constructor
    this.state = {secondsElapsed: 0};
    // Need to bind this to our tick function
    this.tick = this.tick.bind(this)
  }
  // Once the component mounts in the DOM, we need to setInterval
  componentDidMount() {
   this.interval = setInterval(this.tick, 1000);
 }
 // this performs any necessary cleanup, such as invalidating
 // times or cleaning up any DOM elements
 componentWillUnmount() {
   clearInterval(this.interval);
 }
 // Custom tick function to set/update the state
 tick() {
   this.setState({secondsElapsed: this.state.secondsElapsed + 1});
 }
  render() {
    return (
      <Home time={this.state.secondsElapsed}/>
    )
  }
}
