import React from 'react'

// This stateless component has the data from the parent.
// We check in render() if there is a message. If not, display empty message.
// If there are statuses, then we loop through the array and display them.
export default class StatusList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const obj = this.props.status.data;
    const checkObj = Object.keys(obj).length === 0;

    if ( checkObj == true) {
      return(
        <div>No Statuses Available</div>
      )
    }
    else {
      return (
        <div className="status-list">
        {obj.map(i => {
            return (<div className="status" key={i.id}>
              <span className="status-delete">
                <div className="status-delete-wrapper">
                  <span className="status-delete-lines-h"></span>
                  <span className="status-delete-lines-v"></span>
                </div>
              </span>
              <div className="status-name">{i.name}</div>
              <div className="status-message">{i.status}</div>
            </div>)
          })}
        </div>
      )
    }
  }
}
