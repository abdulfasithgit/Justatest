import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const ProductComponent = ({ product }) => {
  //const {name, phone, tablets} = {props.product}
  
  return (
    
    <Card className='my-3 p-3'>
      <Link to={`reports/${product.id}`}>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
      </Card.Body>
      <ListGroup variant='flush'>
        <ListGroup.Item>Phone : {product.phone}</ListGroup.Item>
        <ListGroup.Item>Tablets : {product.tablets}</ListGroup.Item>
      </ListGroup>
      </Link>
    </Card>
    
  )
}

export default ProductComponent
