import React from 'react'
import { Navbar, Container, Button, NavDropdown, Nav, Form, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import logo from '../components/images/logo.png'


function NavBar() {
  const navigate = useNavigate();
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
              <Link className='nav-link active' to="/">HOME</Link>
              <Link className='nav-link active' to="blog">BLOG</Link>
              {/* <Link className='nav-link active' to="suggestions">SUGGESTIONS</Link> */}
              <Link className='nav-link active' to="about">ABOUT</Link>
              <Link className='nav-link active' to="support">FAQ'S</Link>
              {/* <NavDropdown title="JOIN US" id="navbarScrollingDropdown">
                <NavDropdown.Item href="signup">SIGNUP</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="login">LOGIN</NavDropdown.Item>
              </NavDropdown> */}
              {/* <Link className='nav-link active' to="joinus" >LOGIN/SIGNUP</Link> */}
              <Link className='nav-link active' to="contactus" >
                CONTACT US
              </Link>
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
            <Button className='m-2' variant="outline-primary" onClick={() => navigate('/joinus')}>Login/Signup</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar