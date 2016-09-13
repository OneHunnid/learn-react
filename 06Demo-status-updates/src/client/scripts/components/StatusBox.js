import React from 'react'
import { connect } from 'react-redux'
import { submitStatusUpdate } from './../actions/submitStatusUpdate'

class StatusBox extends React.Component {
  constructor(props) {
    super(props)
    // Bind our custom methods in the constructor
    this.__handleFormSubmit = this.__handleFormSubmit.bind(this);
  }
  // This custom method allows us to pass in data from our form, and dispatch
  // it using the submitStatusUpdate Action.
  __handleFormSubmit(e) {
    e.preventDefault();

    const form = document.querySelector(".js-form");
    const nameVal = document.querySelector(".js-name").value;
    const messageVal = document.querySelector(".js-message").value;
    const date = new Date();
    const time = date.getTime();

    this.props.dispatch(submitStatusUpdate(nameVal, messageVal, time))

    // Reset the form fields after dispatch 
    form.reset();
  }
  render() {
    return (
      <div className="status-box-container">
        <div className="status-box-title">Status Updater</div>
        <form className="status-form js-form" onSubmit={this.__handleFormSubmit}>
          <input className="status-form-name js-name" placeholder="name"/>
          <textarea className="status-form-message js-message" placeholder="What's on your mind?" />
          <button className="status-form-submit">Update</button>
        </form>
      </div>
    )
  }
}

// Inject just dispatch and don't listen to store
export default connect()(StatusBox)
