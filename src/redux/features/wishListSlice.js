import { createSlice } from "@reduxjs/toolkit";
import { loadItems } from "../loadItems";

const wishListSlice = createSlice({
    name: 'wishlist',
    initialState: {
        items: loadItems('wishlist'),
    },
    reducers: {
        addToWishlist: (state, action) => {
            let existing = state.items.find((item) => item.id === action.payload.id);
            if(!existing){
                state.items.push(action.payload)
            }
        }, 
        removeFromWishlist: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
        }, 
    
    },
});

export const { addToWishlist, removeFromWishlist } = wishListSlice.actions;
export default wishListSlice.reducer;