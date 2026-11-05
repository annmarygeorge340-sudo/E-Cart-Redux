import { faStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function View() {
  return (
    <div className='container my-5  pt-5'>
<div style={{height:"75vh"}} className='row align-items-center'>

  <div className="col-lg-6  text-center my-5 pt-5">
<img  width={"70px"} height={"70px"} className='img-fluid'  src="https://png.pngtree.com/png-vector/20250215/ourlarge/pngtree-red-nail-polish-bottle-png-image_15475954.png" alt="product" />

<div className='mt-5'>
  <button className='btn  me-5' style={{ backgroundColor: '#f81f1f' }}>ADD TO WISHLIST</button>
  <button className='btn' style={{ backgroundColor: '#09d539' }}>ADD TO CART</button>
</div>

  </div>
  <div className="col-lg-6 ">
<h3 className='fw-bold'>Title</h3>
<h2 className='fw-bold'>$ 30</h2>
<h4 className='fw-bold'>Brand :</h4>
<h4 className='fw-bold'>Category :</h4>
<h4 className='fw-bold'>Description :</h4>
<h5 className='fw-bold'>Client Reviews</h5>

<div className='border rounded shadow my-5 p-2'>
<p><span className='fw-bolder'>Name : </span> Message</p>
<p>Rating : 5 <FontAwesomeIcon icon={faStar} className='text-warning' /></p>
</div>
  </div>

</div>
    </div>
  )
}

export default View
