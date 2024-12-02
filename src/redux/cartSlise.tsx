import {Cart} from "../types";
import {createSlice} from "@reduxjs/toolkit";


type CartState = {
    cart: Cart[];
};

const initialState: CartState = {
    cart: JSON.parse(localStorage.getItem('cart') || "[]"),
};


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.cart.push(action.payload);
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        removeProduct: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload);
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
    },
});


export const {addProduct, removeProduct} = cartSlice.actions;

export default cartSlice.reducer;
