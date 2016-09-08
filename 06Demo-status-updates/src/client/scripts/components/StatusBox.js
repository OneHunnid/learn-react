import React from 'react'
import { connect } from 'react-redux'
import { submitStatusUpdate } from './../actions/submitStatusUpdate'

class StatusBox extends React.Component {
  constructor(props) {
    super(props)
    this.__handleFormSubmit = this.__handleFormSubmit.bind(this);
  }
  __handleFormSubmit(e) {
    e.preventDefault();
    
    const nameVal = document.querySelector(".js-name").value;
    const messageVal = document.querySelector(".js-message").value;
    const date = new Date();
    const time = date.getTime();

    this.props.dispatch(submitStatusUpdate(nameVal, messageVal, time))
  }
  render() {
    return (
      <div className="status-box-container">
        <div className="status-box-title">Status Updater</div>
        <form className="status-form" onSubmit={this.__handleFormSubmit}>
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
