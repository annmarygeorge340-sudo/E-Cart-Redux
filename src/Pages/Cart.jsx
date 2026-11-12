import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../Components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCart, emptyCart, incrementCart, removeCartItem } from '../Redux/Slices/CartSlice'
import Swal from 'sweetalert2'
import { icon, text } from '@fortawesome/fontawesome-svg-core'

function Cart() {

const userCart = useSelector(state=>state.cartReducer)
const dispatch = useDispatch()
const [cartTotal,setCartTotal]=useState(0)
const navigate = useNavigate()

useEffect(()=>{
setCartTotal(userCart?.reduce((acc,curr)=>acc+curr.totalPrice,0))

},[userCart])

const handleDecrement = (product)=>{
  if (product.quantity>1) {
    dispatch(decrementCart(product.id))
    
  }else{
    dispatch(removeCartItem(product.id))
  }
}

const handleCheckout = ()=>{
  dispatch(emptyCart())
  Swal.fire({
    title:"Order placed successfully",
    text:"Thank you for purchasing with us",
    icon:"success",
    confirmButtonText:"ok"
  })
navigate('/')

}

  return (
    <>
     
      <Header/>
    {
      
   userCart.length>0 ?

      <div className='container my-5' >
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
      {
        userCart.map((item,index)=>(
          <tr key={item?.id}>
      <td>{index+1}</td>
     <td>{item?.title}</td>
      <td><img width={"50px"} height={"50px"} src={item?.thumbnail} alt="no img" /></td>
      <td>
        <div className='d-flex'>
          <button onClick={()=>handleDecrement(item)}  className='btn fs-1'>-</button>
          <input style={{width:"40px" }} value={item?.quantity} type="text" className='form-control mt-4' readOnly/>
          <button onClick={()=>{dispatch(incrementCart(item?.id))}} className='btn fs-1'>+</button>
        </div>
      </td>
      <td>${item?.totalPrice}</td>
      <td  onClick={()=>dispatch(removeCartItem(item?.id))} className='text-danger fs-3 hover fw-bold'>x</td>  
      </tr>
        ))
      }
    </tbody>
  </table>
  <div className='float-end p-3'>
    <button onClick={()=>dispatch(emptyCart())} className='btn btn-danger'>EMPTY CART</button>
    <Link to={"/"} className='btn  ms-5 'style={{ backgroundColor: '#cd6ae1' }}>SHOP MORE...</Link>
  </div>
   </div>
         <div className="col-lg-4">
  <div className='border shadow rounded p-5 text-center'>
  <h3>Total Amount : <span className='text-danger'>$ {cartTotal}</span></h3>
  <hr />
  <button onClick={handleCheckout} className='btn 'style={{ backgroundColor: '#03fd3d' }}>CHECKOUT</button>
         </div>
        </div>
       </div>
     </div>

:

      //empty cart
      <div className='d-flex justify-contet-center align-items-center flex-column my-5'>
        <img className='' height={'500px'} src="https://assets.streamlinehq.com/image/private/w_800,h_800,ar_1/f_auto/v1/icons/seoul/shopping/shopping/empty-cart-9p91f0l3qq8hn5t9m6fqzl.png?_a=DATAiZAAZAA0" alt="cart img" />
        <h1>your CART is EMPTY</h1>
        <Link to={'/'} className='btn btn-info m-2'>Add more</Link>
      
      </div>
   }
    </>
  )
}

export default Cart
