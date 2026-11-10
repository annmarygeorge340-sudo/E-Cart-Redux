import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from './Slices/ProductSlice'
import wishlistSlice from './Slices/WishlistSlice'   


const CartStore = configureStore({
    reducer:{
productReducer:ProductSlice,
wishlistReducer:wishlistSlice,
cartReducer:{}


    }
})

export default CartStore