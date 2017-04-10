import React from 'react'
// import { connect } from 'react-redux'
// import { fetchMessage } from './../actions/fetchMessage'

class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    // this.props.dispatch(fetchMessage());
  }
  render() {
    return (
      <div className="home">
        <div className="jumbotron">
          <div className="container text-center">
            <h1>Base Template</h1>
            <p>Something Creative Goes Here</p>
              <div>
                <button type="button" className="btn btn-primary">Get Started</button>
                <button type="button" className="btn btn-success">Learn More</button>
              </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3>Heading 3</h3>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet nulla tortor. Duis id rutrum dolor. Fusce eu quam viverra, tristique justo quis, rhoncus augue. In id risus euismod, finibus dui eget.</div>
            </div>
            <div className="col-md-4">
              <h3>Heading 3</h3>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet nulla tortor. Duis id rutrum dolor. Fusce eu quam viverra, tristique justo quis, rhoncus augue. In id risus euismod, finibus dui eget.</div>
            </div>
            <div className="col-md-4">
              <h3>Heading 3</h3>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet nulla tortor. Duis id rutrum dolor. Fusce eu quam viverra, tristique justo quis, rhoncus augue. In id risus euismod, finibus dui eget.</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// Home.propTypes = {
//   message: React.PropTypes.string
// }
//
// const mapStateToProps = (store) => {
//   return {
//     message: store.retrieveMessage.message,
//     dispatch: store
//   }
// }

// export default connect(mapStateToProps)(Home)

export default Home
