import {Team} from "../types";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";


type TeamState = {
    team: Team[] | null;
    isLoading: boolean;
    isError: boolean;
};


export const fetchTeam = createAsyncThunk<Team[]>('team/fetchTeam', async () => {

    try {
        const res = await fetch(`https://8213b6b4b05ebce6.mokky.dev/team`);

        if (!res.ok) {
            throw new Error('Что-то пошло не так');
        }
        const data = await res.json();

        if (!data || !Array.isArray(data)) {
            throw new Error('Не верный тип');
        }
        return data;
    } catch (error) {
        console.error('Что-то пошло не так:', error);
        throw error;
    }
});

const initialState: TeamState = {
    team: [],
    isLoading: false,
    isError: false,
};


const teamSlice = createSlice({
    name: 'team',
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder
            .addCase(fetchTeam.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchTeam.fulfilled, (state, action:PayloadAction<Team[]>) => {
                state.isLoading = false;
                state.team = action.payload;
            })
            .addCase(fetchTeam.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })
    }
});


export default teamSlice.reducer;