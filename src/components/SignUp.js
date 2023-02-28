import React from 'react'
import './Register.css'
import vegbg from "../public/veg-bg.jpg"
import { Link } from "react-router-dom"

const SignUp = () => {
  return (
    <div>
        <img src={vegbg} alt="" className="register-bg" />
        <div className="bg-text">
            <h3 style={{ textAlign: 'center', fontFamily: 'secular one', padding: '20px' }}>Sign In to Powstik</h3>
            <div>
                <label for="username">Username or email address:</label>
                <input type="text" id="username" name="username"/>
                <br/><br/>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password"/>
                <br/><br/>
                <label for="type">I am a:</label><br/>
                <div>
                    <div>
                        <input type="radio" name="type" value="Customer" id="customer"
                        style= {{ marginRight: '15px' }} />
                        Customer
                    </div>
                    <div>
                        <input type="radio" name="type" value="Vendor" id="vendor"
                        style= {{ marginRight: '15px' }} />
                        Vendor
                    </div>
                </div>
            </div>
            <br/><br/>
            <h5 style={{ textAlign: 'center' }}>Already have an account?
                <Link to="/register" style={{ marginLeft: '10px' }}>Log In</Link>
            </h5>
        </div>
    </div>
  )
}

export default SignUp
