import React from 'react'
import './Register.css'
import vegbg from "../public/veg-bg.jpg"
import { Link } from "react-router-dom"

const Register = () => {
  return (
    <div>
        <img src={vegbg} alt="" className="register-bg" />
        <div className="bg-text">
            <h3 style={{ textAlign: 'center', fontFamily: 'secular one', padding: '20px' }}>Log In to Powstik</h3>
            <div>
                <label for="username">Username or email address:</label><br/>
                <input type="text" id="username" name="username"/>
                <br/><br/>
                <label for="password">Password:</label><br/>
                <input type="password" id="password" name="password"/>
            </div>
            <br/><br/>
            <h5 style={{ textAlign: 'center' }}>New to Powstik?
                <Link to="/signup" style={{ marginLeft: '10px' }}>Sign Up</Link>
            </h5>
        </div>
    </div>
  )
}

export default Register
