import React from 'react'
import {Navbar, Container, FormControl, Dropdown, Nav, Badge, Button} from 'react-bootstrap';
import {FaShoppingCart} from 'react-icons/fa'
import { CartState } from '../context/Context';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Header = () => {
  const {
    state : { cart },
    dispatch
  } = CartState();
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
                  <Badge>{cart.length}</Badge>
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ minWidth: 370 }}>
                  {cart.length > 0 ? (
                    <>
                      {cart.map((prod) => (
                        <span className='cartItem' key= {prod.id}>
                          <img
                            src={prod.image}
                            className='cartItemImg'
                            alt={prod.name}
                            />
                            <div className='cartItemDetail'>
                              <span>{prod.name}</span>
                              <span>₹ {prod.price.split(".")[0]}</span>
                            </div>
                            <AiFillDelete
                            fontSize="20px"
                            style={{ cursor: "pointer"}}
                            onClick={() => 
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: prod,
                            })
                          }
                          />
                        </span>
                      ))}
                      <Link to='/cart'>
                        <Button style={{width: '95%', margin:'0 10px'}}>
                          Go to cart
                        </Button>
                      </Link>
                    </>
                  ) : (<span style={{ padding: 10}}>The cart is empty!</span>)}
                  
                </Dropdown.Menu>
              </Dropdown>
            </Nav>

        </Container>
    </Navbar>
  )
}

export default Header