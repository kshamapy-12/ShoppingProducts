import { configureStore } from "@reduxjs/toolkit";
import productReducer from './features/productSlice';
import cartReducer from './features/cartSlice';
import wishlistReducer from './features/wishListSlice';


export const store = configureStore({
    reducer: {
    products: productReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    }
});

store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('cart', JSON.stringify(state.cart.items));
    localStorage.setItem('wishlist', JSON.stringify(state.wishlist.items));
});

