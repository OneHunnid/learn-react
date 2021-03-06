import React from 'react'
import { connect } from 'react-redux'
import { fetchMessage } from './../actions/fetchMessage'
import { Grid, Row, Col, Button, Jumbotron, ButtonToolbar } from 'react-bootstrap'

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
        <div className="home">
          <Jumbotron>
            <div className="container text-center">
              <h1>Base template</h1>
              <p>{this.props.message}</p>
              <ButtonToolbar className="make-inline-block">
                <Button bsStyle="primary">Get Started</Button>
                <Button bsStyle="success">Learn More</Button>
              </ButtonToolbar>
            </div>
          </Jumbotron>
          <Grid>
            <Row>
              <Col md={4}>
                <h3>Heading 3</h3>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet nulla tortor. Duis id rutrum dolor. Fusce eu quam viverra, tristique justo quis, rhoncus augue. In id risus euismod, finibus dui eget.</div>
              </Col>
              <Col md={4}>
                <h3>Heading 3</h3>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet nulla tortor. Duis id rutrum dolor. Fusce eu quam viverra, tristique justo quis, rhoncus augue. In id risus euismod, finibus dui eget.</div>
              </Col>
              <Col md={4}>
                <h3>Heading 3</h3>
                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet nulla tortor. Duis id rutrum dolor. Fusce eu quam viverra, tristique justo quis, rhoncus augue. In id risus euismod, finibus dui eget.</div>
              </Col>
            </Row>
          </Grid>
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
