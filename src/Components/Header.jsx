import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
   <Navbar expand="lg" className=" fixed-top"  style={{  backgroundColor: '#263238' }}>
      <Container>
        <Navbar.Brand className='text-light'  href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link className='text-light' href="#home">Home</Nav.Link>
            <Nav.Link className='text-light' href="#link">Link</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Header
