import {Cart} from "../types";
import {createSlice} from "@reduxjs/toolkit";


type CartState = {
    cart: Cart[];
};

const initialState: CartState = {
    cart: [],
};


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.cart.push(action.payload)
        },
        removeProduct: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload);
        },
    },
});


export const {addProduct, removeProduct} = cartSlice.actions;

export default cartSlice.reducer;
