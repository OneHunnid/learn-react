import React from 'react'

// This stateless component has the data from the parent.
// We check in render() if there is a message. If not, display empty message.
// If there are statuses, then we loop through the array and display them.
export default class StatusList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const obj = this.props.status;
    const name = obj.data.name;
    const status = obj.data.status;

    // Check to see if props is empty. If yes, display "No status available"
    // If no, display list of statuses using .map

    return (
      <div className="status-list">
        <div className="status">
          <span className="status-delete">
            <div className="status-delete-wrapper">
              <span className="status-delete-lines-h"></span>
              <span className="status-delete-lines-v"></span>
            </div>
          </span>
          <div className="status-name">{name}</div>
          <div className="status-message">{status}</div>
        </div>
      </div>
    )
  }
}
