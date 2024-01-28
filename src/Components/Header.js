import React from 'react'
import {Navbar, Container, FormControl, Dropdown, Nav, Badge} from 'react-bootstrap';
import {FaShoppingCart} from 'react-icons/fa'

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark"className= "justify-content-between">
        <Container> 
            <Navbar.Brand>
                <a href='/' className='link'>Go Shopping</a>
            </Navbar.Brand>
            <Navbar.Text className= 'search'>
                <FormControl
                 style={{width: 500}}
                 className='m-auto'
                placeholder="search here"/>
            </Navbar.Text>
            <Nav>
              <Dropdown alignRight>
                <Dropdown.Toggle>
                  <FaShoppingCart color="white" fontSize="25px" />
                  <Badge>{10}</Badge>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <span>The cart is empty!</span>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>

        </Container>
    </Navbar>
  )
}

export default Header