
import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Card from 'react-bootstrap/Card';
import Header from '../Components/Header'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeoWishlistItem } from '../Redux/Slices/WishlistSlice';
import Swal from 'sweetalert2'
import { addCart } from '../Redux/Slices/CartSlice'

function Whishlist() {
const  userWishlist = useSelector(state=>state.wishlistReducer)
const dispatch = useDispatch()
const userCart = useSelector(state=>state.cartReducer)



const handleCart = (product)=>{
  //check the product is alredy in the wishlist
const existingItem=userCart?.find(item=>item?.id==product?.id)
dispatch(addCart(product))
dispatch(removeoWishlistItem(product.id))
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
    <div className='container my-5'>
     {
      userWishlist?.length>0 ?
<>
 <h1 className='pt-5 text-info fw-bold'>User's Wishlist</h1>

      <div className="row pt-5">
        {/* duplicate columm accorfding to product */}
        {
          userWishlist?.map(item=>(

            <div className="col-3">
          {/* cards */}

          <Card>
            <Card.Img className='shadow' style={{ height: "250px" }} variant="top" src={item?.thumbnail} />
            <Card.Body className='text-center'>
              <Card.Title>{item?.title}</Card.Title>
              <div className='d-flex justify-content-evenly'>
              <button onClick={()=>dispatch(removeoWishlistItem(item?.id))} className='btn btn-danger fs-5'><FontAwesomeIcon icon={faHeartCircleXmark} /></button>     
              <button onClick={()=>handleCart(item)} className='btn btn-success fs-5'><FontAwesomeIcon icon={faCartPlus} /></button>         
              </div>
            </Card.Body>
          </Card>

        </div>
          ))
        }

      </div>
</>
:
<div className='d-flex justify-contet-center align-items-center flex-column'>
  <img className='' height={'500px'} src="https://assets.streamlinehq.com/image/private/w_800,h_800,ar_1/f_auto/v1/icons/seoul/shopping/shopping/empty-cart-9p91f0l3qq8hn5t9m6fqzl.png?_a=DATAiZAAZAA0" alt="cart img" />
  <h1>your wishlist is EMPTY</h1>
  <Link to={'/'} className='btn btn-info m-2'>Add more</Link>

</div>


     }
    </div>
    </>
  )
}

export default Whishlist
