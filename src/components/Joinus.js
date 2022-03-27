import React from "react";
import { Link } from 'react-router-dom'
import './Joinus.css'
import google from './images/google.svg'
import facebook from './images/facebook.svg'

function Joinus() {
    return (
        <div className="mx-auto m-5 sign-box">
            <form>
                <h1>Sign In</h1>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control mb-3" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control mb-3" placeholder="Enter password" />
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox mb-3">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label px-2" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                <Link to={{ pathname: '/signup' }}><button className="btn btn-secondary btn-block form-control mb-2">Signup</button></Link>
                <div className="text-center mb-3">or Signup using</div>
                <div className="text-center">
                    <Link to={{ pathname: '/signup' }} className="mx-3"><img src={google} height='40' width='40'></img></Link>
                    <Link to={{ pathname: '/signup' }} className="mx-3"><img src={facebook} height='40' width='40'></img></Link>
                </div></form>
        </div>
    )
}

export default Joinus