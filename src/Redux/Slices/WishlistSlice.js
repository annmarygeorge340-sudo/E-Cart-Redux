import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name:'Wishlist',
    initialState:[],
    reducers:{
//add to wishlist- view component-
addtoWishlist:(state,action)=>{
    state.push(action.payload)
},

//remove from wishlist-wishlist component- id vechit
removeoWishlistItem:(state,action)=>{
  return  state.filter(item=>item.id!=action.payload)//action.payload il irikne full product ahn
}

 }
})

export const{addtoWishlist,removeoWishlistItem}=wishlistSlice.actions
export default wishlistSlice.reducer