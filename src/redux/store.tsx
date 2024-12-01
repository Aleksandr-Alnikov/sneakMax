import {configureStore} from "@reduxjs/toolkit";
import goodsReduser from './goodsSlice';
import teamReduser from './teamSlice';
import cartReduser from './cartSlise';


const store = configureStore( {
    reducer: {
        goods: goodsReduser,
        team: teamReduser,
        cart: cartReduser,
    },
});


export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;