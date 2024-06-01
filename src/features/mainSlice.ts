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


export const getPing = createAsyncThunk("get/getPing", async () => {
    const response = await fetch(`${API_ROUTE}/auth/ping`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    });
    const data = await response.json();
    return data;
})


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

export const searchAmbulance = createAsyncThunk("get/searchAmbulance", async (data: any) => {
    const response = await fetch(`${API_ROUTE}/main/SearchAmbulance`, {
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

export const searchBloodBanks = createAsyncThunk("get/searchBloodBanks", async (data: any) => {
    const response = await fetch(`${API_ROUTE}/main/searchBloodBank`, {
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


        searchAmbulanceData: [],
        searchAmbulanceDataLoading: false,

        searchBloodBankData: [],
        searchBloodBankDataLoading: false,

        pingData: {},
        pingDataLoading: false,

        drawerOpen: false,
        drawerData: {},

        userName: "",

    },
    reducers: {
        setDrawerOpen: (state, action) => {
            state.drawerOpen = action.payload;
        },
        setDrawerData: (state, action) => {
            state.drawerData = action.payload;
        },
        setUsername: (state, action) => {
            state.userName = action.payload;
        }
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


            .addCase(searchAmbulance.pending, (state) => {
                state.searchAmbulanceDataLoading = true;
            })
            .addCase(searchAmbulance.fulfilled, (state, action) => {
                state.searchAmbulanceData = action.payload;
                state.searchAmbulanceDataLoading = false;
            })
            .addCase(searchAmbulance.rejected, (state) => {
                state.searchAmbulanceDataLoading = false;
            })

            .addCase(searchBloodBanks.pending, (state) => {
                state.searchBloodBankDataLoading = true;
            })
            .addCase(searchBloodBanks.fulfilled, (state, action) => {
                state.searchBloodBankData = action.payload;
                state.searchBloodBankDataLoading = false;
            })
            .addCase(searchBloodBanks.rejected, (state) => {
                state.searchBloodBankDataLoading = false;
            })


            .addCase(getPing.pending, (state) => {
                state.pingDataLoading = true;
            })
            .addCase(getPing.fulfilled, (state, action) => {
                state.pingData = action.payload;
                state.pingDataLoading = false;
            })

    },
});

export const {
    setDrawerOpen,
    setDrawerData,
    setUsername
} = mainSlice.actions;