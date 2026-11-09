import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from './Slices/ProductSlice'



const CartStore = configureStore({
    reducer:{
productReducer:ProductSlice,
wishlistReducer:{},
cartReducer:{}


    }
})

export default CartStore