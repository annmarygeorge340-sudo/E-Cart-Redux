import React from 'react'
import { Link } from 'react-router-dom'

function Cart() {
  return (
    <div className='container my-5' style={{height:"50vh"}}>
      <h1 className='pt-5 text-info fw-bold'>User's Cart</h1>
     <div className='row'>
      <div className="col-lg-8 border shadow">
<table className='table'>
  <thead>
    <tr>
      <th>3</th>
      <th>Product</th>
      <th>Image</th>
      <th>Quantity</th>
      <th>Price</th>
      <th>...</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>1</td>
   <td>eyeshadow</td>
    <td><img width={"50px"} height={"50px"} src="https://t4.ftcdn.net/jpg/06/99/14/49/360_F_699144970_uQxDMy5w9G4M9j9IviSEuwtDiYeuXxk2.jpg" alt="" /></td>
    <td>
      <div className='d-flex'>
        <button className='btn fs-1'>-</button>
        <input style={{width:"40px" }} value={10} type="text" className='form-control mt-4' readOnly/>
        <button className='btn fs-1'>+</button>
      </div>
    </td>
    <td>$ 30</td>
    <td className='text-danger fs-3'>x</td>  
    </tr>
  </tbody>
</table>
<div className='float-end p-3'>
  <button className='btn btn-danger'>EMPTY CART</button>
  <Link to={"/"} className='btn  ms-5 'style={{ backgroundColor: '#cd6ae1' }}>SHOP MORE...</Link>
</div>
 </div>
       <div className="col-lg-4">
<div className='border shadow rounded p-5 text-center'>
<h3>Total Amount : <span className='text-danger'>$ 300</span></h3>
<hr />
<button className='btn 'style={{ backgroundColor: '#03fd3d' }}>CHECKOUT</button>
</div>

       </div>
     </div>
     
     

    </div>
  )
}

export default Cart
