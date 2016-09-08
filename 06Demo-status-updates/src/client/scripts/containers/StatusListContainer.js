import React from 'react'
import { connect } from 'react-redux'
import StatusList from '../components/StatusList'

@connect((store) => {
  return {
    data: store.Statuses
  }
})

// This stateful component handles the data from the store and passes it
// to the children which will then render it in the DOM.
// We do this by passing in this.props as a the prop "status"
export default class StatusListContainer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props.data)
    return (
      <StatusList status={this.props}/>
    )
  }
}
