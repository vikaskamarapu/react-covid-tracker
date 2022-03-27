import React from "react";
import { Link } from 'react-router-dom'
import './Joinus.css'
import google from './images/google.svg'
import facebook from './images/facebook.svg'

function Joinus() {
    return (
        <div className="mx-auto m-5 sign-box bg-light">
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
                    <div className="row custom-control custom-checkbox mb-3">
                        <div className="col">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label px-2" htmlFor="customCheck1">Remember me</label>
                        </div>
                        <div className="col ">
                            <p className="forgot-password text-right">
                                <a className="text-primary" href="#" >Forgot password?</a>
                            </p>
                        </div>   
                    </div>
                    <div className='text-center'>
                        <button type="submit" className="btn btn-primary btn-lg btn-block">Login</button>
                    </div>
                    <div className="pt-3">
                        <p className="forgot-password text-right text-center">
                            <Link className="text-primary" to={{ pathname: '/Signup' }}>sign up?</Link>
                        </p>
                    </div>
                </div>
                
                <div className="text-center mb-3">Or Use Social Media Credentials</div>
                <div className="text-center">
                    <Link to={{ pathname: '/signup' }} className="mx-3">
                        <img src={google} height='40' width='40'></img>
                        </Link>
                    <Link to={{ pathname: '/signup' }} className="mx-3">
                        <img src={facebook} height='40' width='40'></img>
                        </Link>
                    <Link to={{ pathname: '/signup' }} className="mx-3">
                        <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-twitter-1.png" height='40' width='40'></img>
                        </Link>
                </div> 
                </form>
        </div>
    )
}

export default Joinus