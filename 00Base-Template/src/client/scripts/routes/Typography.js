import React from 'react'

class Typography extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="page-typography">
        <div class="jumbotron">
          <div className="container text-center">
            <h1>Typography</h1>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1>h1. Bootstrap heading <small>Secondary text</small></h1>
              <h2>h2. Bootstrap heading <small>Secondary text</small></h2>
              <h3>h3. Bootstrap heading <small>Secondary text</small></h3>
              <h4>h4. Bootstrap heading <small>Secondary text</small></h4>
              <h5>h5. Bootstrap heading <small>Secondary text</small></h5>
              <h6>h6. Bootstrap heading <small>Secondary text</small></h6>

              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem risus, volutpat nec nunc eu, placerat pellentesque metus.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem risus, volutpat nec nunc eu, placerat pellentesque metus. Morbi nec magna pharetra, tempus libero non, fermentum dolor. Nunc non lacinia libero. Fusce interdum ante in suscipit maximus. Fusce condimentum dolor nec orci faucibus malesuada pulvinar vitae quam. Nulla vitae nunc vel nisl eleifend volutpat. Quisque volutpat neque neque, ac lacinia massa iaculis id. Vivamus tempor pulvinar scelerisque. Ut blandit sit amet orci et egestas. Cras posuere rutrum pulvinar. In egestas tempor sapien eu sagittis. Vestibulum convallis urna nec vulputate imperdiet.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Typography
