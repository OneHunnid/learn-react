import React from 'react'
import { connect } from 'react-redux'
import { deleteStatus } from './../actions/deleteStatus'

// This stateless component has the data from the parent.
// We check in render() if there is a message. If not, display empty state message.
// If there are statuses, then we loop through the array and display them.
class StatusList extends React.Component {
  constructor(props) {
    super(props)
    this.__handleDeleteStatus = this.__handleDeleteStatus.bind(this)
  }
  __handleDeleteStatus(e) {
    const dataId = e.target.attributes.getNamedItem('data-id').value;

    this.props.dispatch(deleteStatus(dataId))
  }
  render() {
    const obj = this.props.status.data;
    const checkObj = Object.keys(obj).length === 0;

    if (checkObj == true) {
      return(
        <div>No Statuses Available</div>
      )
    }
    else {
      return (
        <div className="status-list">
        {obj.map(i => {
            return (
              <div className="status js-status" key={i.id}>
                <span className="status-delete" data-id={i.id} onClick={this.__handleDeleteStatus}>
                  <div className="status-delete-wrapper">
                    <span className="status-delete-lines-h"></span>
                    <span className="status-delete-lines-v"></span>
                  </div>
                </span>
                <div className="status-name">{i.name}</div>
                <div className="status-message">{i.status}</div>
              </div>
            )
          }).reverse()}
        </div>
      )
    }
  }
}

export default connect()(StatusList)
