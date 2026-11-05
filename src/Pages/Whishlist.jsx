
import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Card from 'react-bootstrap/Card';

function Whishlist() {
  return (
    <div className='container my-5'>
      <h1 className='pt-5 text-info fw-bold'>User's Wishlist</h1>

      <div className="row pt-5">
        {/* duplicate columm accorfding to product */}
        <div className="col-3">
          {/* cards */}

          <Card>
            <Card.Img className='shadow' style={{ height: "250px" }} variant="top" src="https://t4.ftcdn.net/jpg/06/99/14/49/360_F_699144970_uQxDMy5w9G4M9j9IviSEuwtDiYeuXxk2.jpg" />
            <Card.Body className='text-center'>
              <Card.Title>Perfume</Card.Title>
              <div className='d-flex justify-content-evenly'>
<button className='btn btn-danger'><FontAwesomeIcon icon={faHeartCircleXmark} /></button>     
<button className='btn btn-success'><FontAwesomeIcon icon={faCartPlus} /></button>         
              </div>
            </Card.Body>
          </Card>

        </div>

      </div>



    </div>
  )
}

export default Whishlist
