import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Rating from './Rating'

const SingleProduct = ({prod}) => {
  return (
    <div className='products'>
      <Card>
        <Card.Img variant='top' src={prod.image} alt='prod.name' />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{paddingBottom : 10}}>
            <span>₹ {prod.price.split(".")[0]}</span>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>7 days delievry</div>
            )}
            <Rating rating={prod.ratings} />
          </Card.Subtitle>
          <Button disabled={!prod.inStock} variant='info' style={{margin : 10}}>
            {!prod.onStock ? "Out of stock" : "Add to cart"}
          </Button>
          <Button variant='danger'>
            Remove from cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default SingleProduct