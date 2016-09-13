import React from 'react'
import { connect } from 'react-redux'
import StatusList from '../components/StatusList'

// This is how you use ES2017 Decorator to connect a store to a component

// @connect((store) => {
//   return {
//     data: store.Statuses
//   }
// })

// This stateful component handles the data from the store and passes it
// to the children which will then render it in the DOM.
// We do this by passing in this.props as a the prop "status"
class StatusListContainer extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props.data)
  }
  render() {
    const obj = this.props.data;
    const checkObj = Object.keys(obj).length === 0;

    if (checkObj == true) {
      return(
        <div>No Statuses Available</div>
      )
    }
    else {
      return (
        <StatusList status={this.props.data}/>
      )
    }
  }
}

// Checking propTypes for object
StatusListContainer.propTypes = {
  status: React.PropTypes.object
}

// We need to map our state to props for our Container Component
// mapStateToProps() will receive an argument which is the entire Redux store.
// The main idea of mapStateToProps() is to isolate which parts of the overall
// state this component needs as its props.
const mapStateToProps = (store) => {
  return {
    data: store.Statuses
  }
}

// We use connect() to add the state as props to our Container Component
export default connect(mapStateToProps)(StatusListContainer)
