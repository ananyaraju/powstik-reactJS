import React from 'react';
import './Cart.css'
import { Button, Container, Col, Row, Table} from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import { Icon } from '@iconify/react';

const Cart = () => {
    const {
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    return (
        <Container className="cart-body">
            <div style={{ fontFamily: "Secular One" }}>
                { isEmpty ? (
                    <>
                        <h1>Your Cart is Empty</h1>
                        <br/>
                        <Button href="/" className="shopnow-btn">Shop Now</Button>
                    </>
                    )
                    : <h1>Your Shopping Cart</h1> }
            </div>
            <div style={{ marginBottom: '70px' }}></div>
            <Row className="justify-content-center">
                <Table responsive="sm"  className="cart-table">
                    <tbody>
                        <tr style= {{ backgroundColor: "gray", color: "white" }}>
                            <td colSpan={2}>Product</td>
                            <td>Quantity</td>
                            <td>Price</td>
                            <td>Delete</td>
                        </tr>
                        { items.map((item, index) => {
                            return(
                                <tr key={index}>
                                    <td>
                                        <img src={item.image} style={{ width: '4rem' }} alt="" />
                                    </td>
                                    <td>
                                        <h6> {item.title} </h6>
                                    </td>
                                    <td>
                                        <div className="btn-container">
                                            <Button className="quantity-buttons" onClick={()=> updateItemQuantity(item.id, item.quantity - 1)}>
                                                <Icon icon="ic:round-minus" />
                                            </Button>
                                            {item.quantity}
                                            <Button className="quantity-buttons" onClick={()=> updateItemQuantity(item.id, item.quantity + 1)}>
                                                <Icon icon="material-symbols:add-box-outline" />
                                            </Button>
                                        </div>
                                    </td>
                                    <td>
                                        Rs. {item.price}
                                    </td>
                                    <td>
                                        <Button variant="danger" onClick={()=> removeItem(item.id)}>
                                            <Icon icon="mingcute:delete-2-line" />
                                        </Button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                {!isEmpty &&
                    <Row 
                        style={{ position: 'fixed', bottom: 0 }}
                        className="justify-content-center w-100">
                        <Col style={{ marginBottom: '60px' }} className="p-0">
                            <Button variant="danger" onClick={()=> emptyCart()}>
                                <Icon icon="carbon:shopping-cart-clear" /> Clear Cart
                            </Button>
                        </Col>
                        <Col className="py-2">
                            <h4>Total Price: Rs. {cartTotal}</h4>
                            <Button style = {{ width: "35%", marginTop: '50px', marginBottom: "50px" }} variant="success">
                                CHECKOUT
                            </Button>
                        </Col>
                    </Row>}
            </Row>
        </Container>
    );
};

export default Cart;