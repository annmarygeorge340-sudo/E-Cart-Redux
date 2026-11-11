import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from './Slices/ProductSlice'
import wishlistSlice from './Slices/WishlistSlice'   
import cartSlice from './Slices/CartSlice'

const CartStore = configureStore({
    reducer:{
productReducer:ProductSlice,
wishlistReducer:wishlistSlice,
cartReducer:cartSlice


    }
})

export default CartStore