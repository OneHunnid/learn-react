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
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>{this.props.message}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet nulla tortor. Duis id rutrum dolor. Fusce eu quam viverra, tristique justo quis, rhoncus augue. In id risus euismod, finibus dui eget, lacinia lorem. Curabitur euismod quam et lectus fermentum, vel maximus libero tincidunt. Nunc ac dignissim nisl. Nullam lobortis tellus vitae dolor vulputate lobortis. Morbi porttitor odio et ante porttitor, vel rhoncus mauris pulvinar.</div>
          </div>
        </div>
      )
    }
  }
}

Home.propTypes = {
  message: React.PropTypes.string
}

const mapStateToProps = (store) => {
  return {
    message: store.retrieveMessage.message,
    dispatch: store
  }
}

export default connect(mapStateToProps)(Home)
