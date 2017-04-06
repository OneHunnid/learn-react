import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, NavItem, Input, Navbar, Button } from 'react-bootstrap'

// @TODO
// Add <Link to="/">Logo Goes Here</Link> for <Navbar.Brand>
// react-router-bootstrap doesn't support react-router v4 yet
// So we can't use import { LinkContainer } from 'react-router-bootstrap'
// StackOverflow: http://tiny.cc/ad39jy

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
        <Navbar className="navbar--no-margin-bottom">
         <Navbar.Header>
           <Navbar.Brand>
             <a href="/">Base Template</a>
           </Navbar.Brand>
           <Navbar.Toggle />
         </Navbar.Header>
         <Navbar.Collapse>
           <Nav>
              <Link to="/typography">Typography</Link>
              <NavItem eventKey={1} href="/notfound">404 Page</NavItem>
              <NavItem eventKey={2} href="/typography">Typography</NavItem>
           </Nav>
           <Navbar.Form pullRight>
             <Button type="submit">Contact Us</Button>
           </Navbar.Form>
         </Navbar.Collapse>
        </Navbar>
    )
  }
}

export default Header;
