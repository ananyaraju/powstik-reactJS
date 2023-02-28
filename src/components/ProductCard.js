import React from 'react'
import './ProductCard.css';
import { Card, Button } from 'react-bootstrap';
import { useCart } from 'react-use-cart';

const ProductCard = (props) => {

    // eslint-disable-next-line no-unused-vars
    let { image, price, title, id } = props.data;
    const { addItem } = useCart();
    const addToCart = () => {
        console.log(props.data.id);
        addItem(props.data);
    }

    return (
        <Card id="product-card">
            <Card.Img className="rounded card-img" variant="top" src={image} alr=""/>
            <Card.Body>
              <Card.Title className="font-weight-bold">{title}</Card.Title>
              <Card.Text>
                  Price: 
                  <span id="product-price"> ₹ {price} </span>
              </Card.Text>
              <Button onClick={() => {
                    addToCart(); alert("Product added to cart!");
                }} className="btn btn-primary cardButton">+ Add To Cart</Button>
            </Card.Body>
        </Card>
    )
}

export default ProductCard;