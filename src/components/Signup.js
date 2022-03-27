import React from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'

function Signup() {
    return (
        <div className='signup'>
            <form className='sign-box mx-auto'>
                <h1>Sign Up</h1>
                <div className="form-group mb-3">
                    <label>First name</label>
                    <input type="text" className="form-control mb-3" placeholder="First name" />
                </div>
                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control mb-3" placeholder="Last name" />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control mb-3" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control mb-3" placeholder="Enter password" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <Link to={{ pathname: '/joinus' }}>sign in?</Link>
                </p>
            </form>
        </div>
    )
}

export default Signup