import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_ROUTE } from "../utils/Constants";


export const getBloodRequest = createAsyncThunk("get/getBloodRequest", async () => {
    const response = await fetch(`${API_ROUTE}/main/getBloodRequests`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
    });
    const data = await response.json();
    if (data.statusCode === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('cart');
        window.location.reload();
    }
    return data;
});

export const mainSlice = createSlice({
    name: "main",
    initialState: {
        bloodRequestData: [],
        bloodRequestDataLoading: false,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getBloodRequest.pending, (state) => {
                state.bloodRequestDataLoading = true;
            })
            .addCase(getBloodRequest.fulfilled, (state, action) => {
                state.bloodRequestData = action.payload;
                state.bloodRequestDataLoading = false;
            })
            .addCase(getBloodRequest.rejected, (state) => {
                state.bloodRequestDataLoading = false;
            });

    },
});

export const {

} = mainSlice.actions;