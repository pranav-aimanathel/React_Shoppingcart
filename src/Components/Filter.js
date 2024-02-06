import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Rating from './Rating';

const Filter = () => {

    const [rate, setRate] = useState(3)

  return (
    <div className='filters'>
        <span className='title'>Filter Products</span>
        <span>
           <Form.Check
                inline
                label="Ascending"
                name="group1"
                type="radio"
                id={`inline-1`}
           />
        </span>
        <span>
            <Form.Check
                inline
                label="Descending"
                name="group1"
                type="radio"
                id={`inline-2`}
            />
        </span>
        <span>
            <Form.Check
                inline
                label="Include out of stock"
                name="group1"
                type="checkbox"
                id={`inline-3`}
            />
        </span>
        <span>
            <Form.Check
                inline
                label="Fast delivery only"
                name="group1"
                type="checkbox"
                id={`inline-4`}
            />
        </span>
        <span>
            <Rating rating={rate} onClick={(i) => setRate(i+1)} style={{ cursor: "pointer"}} />
        </span>
        <Button variant="light">Clear filters</Button>
    </div>
  )
}

export default Filter
