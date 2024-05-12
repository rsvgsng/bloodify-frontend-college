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

    return data;
});

export const searchBlood = createAsyncThunk("get/searchBlood", async (data: any) => {
    const response = await fetch(`${API_ROUTE}/main/searchBlood`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + localStorage.getItem('token')
        },
        body: JSON.stringify(data)
    });
    const res = await response.json();
    return res;
});

export const mainSlice = createSlice({
    name: "main",
    initialState: {
        bloodRequestData: [],
        bloodRequestDataLoading: false,


        searchBloodData: [],
        searchBloodDataLoading: false,

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
            })

            .addCase(searchBlood.pending, (state) => {
                state.searchBloodDataLoading = true;
            })
            .addCase(searchBlood.fulfilled, (state, action) => {
                state.searchBloodData = action.payload;
                state.searchBloodDataLoading = false;
            })
            .addCase(searchBlood.rejected, (state) => {
                state.searchBloodDataLoading = false;
            })


    },
});

export const {

} = mainSlice.actions;