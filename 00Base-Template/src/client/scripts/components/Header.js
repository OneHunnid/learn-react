import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <nav className="navbar navbar-default navbar--no-margin-bottom">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Base Template</Link>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="typography">Typography</Link>
            </li>
            <li>
              <Link to="notfound">404 Page</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header;
