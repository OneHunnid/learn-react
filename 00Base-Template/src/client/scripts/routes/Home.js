import React from 'react'
import { connect } from 'react-redux'
import { fetchMessage } from './../actions/fetchMessage'

class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    this.props.dispatch(fetchMessage());
  }
  render() {
    if (this.props.message === undefined) {
      return (
        <div>Loading...</div>
      )
    }
    else {
      return (
        <div>{this.props.message}!</div>
      )
    }
  }
}


const mapStateToProps = (store) => {
  return {
    message: store.retrieveMessage.message,
    dispatch: store
  }
}

export default connect(mapStateToProps)(Home)
