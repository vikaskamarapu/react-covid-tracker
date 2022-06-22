import React from 'react'
import { Navbar, Container, Button, NavDropdown, Nav, Form, FormControl } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import logo from '../components/images/logo.png';
import './NavBar.css';
import { useSelector } from "react-redux";
import { clearLoginStatus } from "./slices/userSlice";
import { useDispatch } from "react-redux";



function NavBar() {

  let navigate = useNavigate();

  let { userObj, isError, isLoading, isSuccess, errMsg } = useSelector(
    (state) => state.user
  );
  //get dispathc function
  let dispath = useDispatch();


  //logout user
  const userLogout = () => {
    localStorage.clear();
    dispath(clearLoginStatus());
    navigate("/joinus");
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/"><b><img src={logo} alt="" width="70px" height="70px" />COVID-19 </b></Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >

              <Nav.Link as={NavLink} to="/">HOME</Nav.Link>
              <Nav.Link as={NavLink} to="blog">BLOG</Nav.Link>
              <Nav.Link as={NavLink} to="about">ABOUT</Nav.Link>
              <Nav.Link as={NavLink} to="faq">FAQ'S</Nav.Link>
              <Nav.Link as={NavLink} to="ContactUs" >CONTACT US </Nav.Link>

            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            {isSuccess !== true ? (
              <>
                <Button className='m-2' variant="outline-primary" onClick={() => navigate('/joinus')}>Signin/Signup</Button>
              </>) :
              (
                <Button className='m-2' variant="outline-primary" onClick={userLogout}>
                  Logout
                </Button>
              )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar