import React from 'react'
import { Nav, NavItem, Input, Navbar, Button } from 'react-bootstrap'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
        <Navbar className="navbar--no-margin-bottom">
         <Navbar.Header>
           <Navbar.Brand>
             <a href="#">Base Template</a>
           </Navbar.Brand>
           <Navbar.Toggle />
         </Navbar.Header>
         <Navbar.Collapse>
           <Nav>
             <NavItem eventKey={1} href="#">Link 1</NavItem>
             <NavItem eventKey={2} href="#">Link 2</NavItem>
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
