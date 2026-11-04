import React from 'react'
import {
  FaTruckFast,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaArrowRight
} from 'react-icons/fa6';

function Footer() {
  return (
    <div className='row text-light footer-bg py-3 ' style={{ height: '100%', backgroundColor: '#263238' }}>
      <div className='col-3 ps-5 pt-3'>
        <h3><FaTruckFast  className="me-2" /> Daily Cart</h3>
        <p className='pb-2 '>Designed and Build with all the love in the World
          by the <br /> Luminar team with the help of our Contributers</p>
        <p>Code liecenced luminar,doc CC BY 3.0.</p>
        <p>Currently v5.3.2</p>
      </div>

      <div className="col-3 pt-3 ">
        <h3>Links</h3>
        <div>Home</div>
        <div>Wishlist</div>
        <div>Cart</div>
      </div>

      <div className="col-3 pt-3">
        <h3>Guides</h3>
        <div>React</div>
        <div> React Bootstrap</div>
        <div>React Router</div>
      </div>

      <div className="col-3 pt-3">
        <h3>Contact US</h3>
        <input type="email" placeholder="Email here"/>
        <div className="social-icons">
          <FaFacebookF className='m-2'/>
          <FaTwitter className='m-2'/>
          <FaWhatsapp className='m-2'/>
          <FaInstagram className='m-2'/>
          <FaEnvelope className='m-2' />
          <FaPhone className='m-2' />
        </div>
</div>
<div className=" text-center mt-5 ">
  <p>
    Copyright © August 2025 Batch, Daily Cart.
    Built with React Redux.
  </p>
</div>
    </div>

  )
}

export default Footer
