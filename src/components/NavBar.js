import React from 'react'
import { Nav, Navbar, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useCart } from "react-use-cart";

import logo from "../public/powstik-icon.jpg"
import cartlogo from "../public/cart-logo.png"
import './NavBar.css'

const NavBar = () => {

    const {
        // eslint-disable-next-line no-unused-vars
        isEmpty,
        totalItems,
    } = useCart();

    return (
    <div>
        <Navbar fixed="top" expand="lg" className="navbar">
            <Navbar.Brand as={Link} to="/" className="navbar-brand">
                <img className="logo" src={logo} alt="" /> POWSTIK
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse>
                <Form style={{ marginLeft: '30px', width: '350px' }}>
                    <input type="search" placeholder="Search" className="search"/>
                </Form>
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/register" style={{ textAlign: 'center', marginRight: '50px' }}>Log In / Sign Up</Nav.Link>
                    <Nav.Link as={Link} to="/cart" style={{ textAlign: 'center' }}>
                        {totalItems}<img src={cartlogo} className="cartlogo" alt="" />
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
  )
}

export default NavBar
