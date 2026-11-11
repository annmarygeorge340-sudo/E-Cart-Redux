import { faStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { useParams } from 'react-router-dom'
import { all } from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addtoWishlist } from '../Redux/Slices/WishlistSlice'
import Swal from 'sweetalert2'
import { addCart } from '../Redux/Slices/CartSlice'


function View() {

  const {id} = useParams()
  console.log(id);
  const {allProducts} = useSelector(state => state.productReducer)
  const [product,setProduct]=useState({})
const userWishlist = useSelector(state=>state.wishlistReducer)
const userCart = useSelector(state=>state.cartReducer)
const dispatch = useDispatch()
console.log(userWishlist);

useEffect(()=>{
setProduct(allProducts?.find(item=>item.id==id))
},[])
console.log(allProducts);


const handleWishlist = ()=>{
  //check the product is alredy in the wishlist
const existingItem=userWishlist?.find(item=>item?.id==product?.id)

if (existingItem) {
  Swal.fire({
    title:'SORRY',
    text:'oops!!product alredy exist',
    icon:'error',
    confirmButtonText:'ok'

  })
}else{
  dispatch(addtoWishlist(product))
}

}


const handleCart = ()=>{
  //check the product is alredy in the wishlist
const existingItem=userCart?.find(item=>item?.id==product?.id)
dispatch(addCart(product))
  Swal.fire({
title:'SUCCESS',
    text:existingItem? `${existingItem.title}quantity increased` : "product added successfully",
    icon:'success',
    confirmButtonText:'ok'
    
  })

}
 
  



  return (

<>
   <Header/>
  
      <div className='container my-5  pt-5'>
  <div  className='row align-items-center'>
  
    <div className="col-lg-6  text-center my-5 pt-5">
  <img style={ {height:"500px"} } className='img-fluid'  src={product?.thumbnail} alt="product" />
  
  <div className='mt-5'>
    <button onClick={handleWishlist} className='btn  me-5' style={{ backgroundColor: '#f81f1f' }}>ADD TO WISHLIST</button>
    <button onClick={handleCart} className='btn' style={{ backgroundColor: '#09d539' }}>ADD TO CART</button>
  </div>
  
    </div>
    <div className="col-lg-6 ">
  <h3 className='fw-bold'>{product?.title}</h3>
  <h2 className='fw-bold'>${product?.price}</h2>
  <h4 className='fw-bold'>Brand :{product?.brand}</h4>
  <h4 className='fw-bold'>{product?.category}</h4>
  <h4 className='fw-bold'>{product?.description} :</h4>
  <h5 className='fw-bold'>Client Reviews:</h5>
  
  {
    product?.reviews?.map(item=>(
      <div className='border rounded shadow my-5 p-2'>
  <p><span className='fw-bolder'>Name :{item?.reviewerName} </span> Message:{item?.comment}</p>
  <p>Rating : {item?.rating}<FontAwesomeIcon icon={faStar} className='text-warning' /></p>
  </div>
    ))
  }
    </div>
  
  </div>
      </div>
</>
  )
}

export default View
