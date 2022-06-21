import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import './Joinus.css';
import google from './images/google.svg';
import facebook from './images/facebook.svg';



function Joinus() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    

    //get navigate functon to navigate programatically
    let navigate = useNavigate();


    
    const onFormSubmit = (userCredentialsObject) => {
        
        axios.post('http://localhost:4000/user-api/login', userCredentialsObject)
            .then(response => {
                alert(response.data.message);
                if (response.data.message === 'success') {
                    navigate('/')
                }
            })
            .catch(error => {
                console.log(error)
                alert("invalid username or password")
            })
    };
    return (
        <div className='mb-4'>

            <div className="m-5 sign-box mx-auto bg-light">
                <h1>Sign In</h1>
                <div className='row'>
                    <div className='col mx-auto'>
                        <Form onSubmit={handleSubmit(onFormSubmit)}>
                            <Form.Group className='mt-3 mb-3'>
                                <Form.Label >Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Username"
                                    {...register("username", { required: true })}
                                />
                                {errors.username && (
                                    <p className='text-danger' >*Username is required</p>
                                )}
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type='password'
                                    placeholder='Enter Password'
                                    {...register("password", { required: true })}
                                />
                                {errors.password && (
                                    <p className='text-danger'>*Password is required</p>
                                )}
                            </Form.Group>
                            <div className="col ">
                                <p className="forgot-password text-right">
                                    <a className="text-primary" href="#" >Forgot password?</a>
                                </p>
                            </div>
                            <Button variant='secondary' id="a" type="submit" className="buton2">
                                Login
                            </Button>
                        </Form>
                    </div>
                </div>

                <div className="pt-3">
                    <p className="forgot-password text-right text-center">
                        <Link className="text-primary" to={{ pathname: '/Signup' }}>sign up?</Link>
                    </p>
                </div>
                <div className="text-center mb-3">Or Use Social Media Credentials</div>
                <div className="text-center">
                    <Link to={{ pathname: '/signup' }} className="mx-3"><img src={google} height='40' width='40' alt=""></img></Link>
                    <Link to={{ pathname: '/signup' }} className="mx-3"><img src={facebook} height='40' width='40' alt=""></img></Link>
                </div>
            </div>
        </div>
    );
}

export default Joinus;