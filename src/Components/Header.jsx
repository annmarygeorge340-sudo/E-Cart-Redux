import { faHeart, faTruck } from '@fortawesome/free-regular-svg-icons';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons/faCartPlus';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
   <Navbar expand="lg" className=" fixed-top"  style={{  backgroundColor: '#263238' }}>
      <Container>
        <Navbar.Brand ><Link to={"/"} className='text-light text-decoration-none fw-bold'> <FontAwesomeIcon icon={ faTruckFast} className='me-2'/>E-Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Item>
              <input type="text" className='form-control' placeholder='Search your Products' />
            </Nav.Item>
            <Link to={"/Whishlist"} className='text-light text-decoration-none fw-bold ms-5'><FontAwesomeIcon icon={faHeart} className='btn me-2' style={{ backgroundColor: '#d11212' }}/>Wishlist<Badge pill bg="secondary">10</Badge></Link>
            <Link to={"/Cart"} className='text-light text-decoration-none fw-bold ms-5'><FontAwesomeIcon icon={faCartPlus}  className='btn  me-2' style={{ backgroundColor: '#13c43c' }}/>Cart<Badge pill bg="secondary">10</Badge></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Header
