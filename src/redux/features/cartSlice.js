
import { createSlice } from "@reduxjs/toolkit";
import { loadItems } from "../loadItems";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: loadItems('cart'),
    },
    reducers: {
        addToCart: (state, action) => {
        const existing = state.items.find((item) => item.id === action.payload.id);
            if(existing){
                existing.quantity += 1;
            } else{
                state.items.push({...action.payload, quantity: 1});
            }
        }, 
        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
            
        }, 
        increaseQty: (state, action) => {
            let increased = state.items.find((item) => item.id === action.payload)
            increased.quantity += 1;

            
        },
        decreaseQty: (state, action) => {
            let cartItems = state.items.find((item) => item.id === action.payload)

            if(cartItems && cartItems.quantity > 1){
                cartItems.quantity -= 1;
            } else{
                state.items = state.items.filter((item) => item.id !== action.payload)
            }
        },

    },
});

export const { addToCart, removeFromCart, increaseQty, decreaseQty } = cartSlice.actions;
export default cartSlice.reducer;