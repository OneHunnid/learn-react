import React from 'react'
import { connect } from 'react-redux'
import { fetchMessage } from './../actions/fetchMessage'
import { updateMessage } from './../actions/updateMessage'

// This connects the component to the store and allows us
// to dispatch events and retrieve the message prop
// The @ symbol is a Javascript expression currently proposed to signify decorators
// Decorators make it possible to annotate and modify classes and properties at design time
@connect((store) => {
  return {
    message: store.retrieveMessage.message,
    dispatch: store
  }
})

export default class Home extends React.Component {
  constructor() {
    super()
  }
  componentWillMount() {
    this.props.dispatch(fetchMessage());
  }
  handleUpdateMessage(e) {
    e.preventDefault();
    // grab the message that was typed
    const message = document.querySelector('.message-box').value;
    // dispatch the updateMessage action and pass in the message variable
    this.props.dispatch(updateMessage(message));
  }
  render() {
    if (this.props.message === undefined) {
      return (
        <div>Loading...</div>
      )
    }
    else {
      return (
        <div>
          <div>{this.props.message}</div>
          <form onSubmit={this.handleUpdateMessage.bind(this)}>
            <textarea className="message-box" placeholder="enter text here..."></textarea>
            <button className="btn-submit">Submit</button>
          </form>
        </div>
      )
    }
  }
}
