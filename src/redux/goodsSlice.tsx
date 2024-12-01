import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Goods, Params} from "../types";
import axios from "axios";


export const API_URL: string = 'https://10ab3fa23104dfcb.mokky.dev';

type GoodsState = {
    goods: Goods[];
    goodsId: Goods | null;
    isLoading: boolean;
    isError: boolean;
    currentPage: number;
    perPage: number;
    priceRange: number[];
};


export const fetchGoods = createAsyncThunk<Goods[], number> ('goods/fetchGoods', async (page, {rejectWithValue}) => {

        try {
            const {data} = await axios.get<{items: Goods[] }>(`${API_URL}/items?page=${page}&limit=6`);

            return data.items;
        } catch (e) {
            console.log(e)
            return rejectWithValue('что-то пошло не так');
        }
});

export const fetchFilterGoods = createAsyncThunk<Goods[], Params> ('goods/fetchFilterGoods', async (params, {rejectWithValue}) => {

    try {
        const genderQuery = `${params.gender ? `&gender=${params.gender}` : ""}`;
        const sizesQuery = params.sizes ? params.sizes.map((value) => `sizes[]=${value}`).join("&") : "";
        const priceQuery = params.minPrice !== undefined && params.maxPrice !== undefined ? `&price[from]=${params.minPrice}&price[to]=${params.maxPrice}` : "";

        const page = params.page || 1;
        const limit = 6;

        const { data } = await axios.get<{ items: Goods[] }>(`${API_URL}/items?page=${page}&limit=${limit}${genderQuery}${sizesQuery ? `&${sizesQuery}` : ""}${priceQuery}`);
        return data.items;
    } catch (e) {
        console.log(e);
        return rejectWithValue('что-то пошло не так');
    }
});

export const fetchGoodsId = createAsyncThunk<Goods, number>('goods/fetchGoodsId', async (id) => {
    try {
        const res = await fetch(`${API_URL}/items/${id}`);

        if (!res.ok) {
            throw new Error('Что-то пошло не так');
        }
        const data = await res.json();

        if (!data || typeof data !== 'object') {
            throw new Error('Не верный тип');
        }

        return data;
    } catch (error) {
        throw error;
    }
});


const initialState: GoodsState = {
    goods: [],
    goodsId: null,
    isLoading: false,
    isError: false,
    currentPage: 1,
    perPage: 6,
    priceRange: [0, 100000],
};


const goodsSlice = createSlice({
    name: 'goods',
    initialState,
    reducers: {
        clearGoods: (state) => {
            state.goods = [];
        },
        resetFilter: (state) => {
            state.goods = [];
            state.currentPage = 1;
        },
    },
    extraReducers:(builder) => {
        builder
            .addCase(fetchGoods.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchGoods.fulfilled, (state, action:PayloadAction<Goods[]>) => {
                state.isLoading = false;
                const newGoods = action.payload.filter(item => state.goods && !state.goods.some(newItem => newItem.id === item.id));
                state.goods = [...state.goods, ...newGoods];
            })
            .addCase(fetchGoods.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(fetchGoodsId.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchGoodsId.fulfilled, (state, action:PayloadAction<Goods>) => {
                state.isLoading = false;
                state.goodsId = action.payload;
            })
            .addCase(fetchGoodsId.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(fetchFilterGoods.fulfilled, (state, action:PayloadAction<Goods[]>) => {
                state.isLoading = false;
                const newGoods = action.payload.filter(item => !state.goods.some(newItem => newItem.id === item.id));
                state.goods = [...state.goods, ...newGoods];
            })
            .addCase(fetchFilterGoods.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchFilterGoods.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    }
});


export const {clearGoods, resetFilter} = goodsSlice.actions;

export default goodsSlice.reducer;
