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



export const getAdminDash = createAsyncThunk("get/getAdminDash", async (data: any) => {
    const response = await fetch(`${API_ROUTE}/admin/dashboard`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + localStorage.getItem('token')
        },
        body: JSON.stringify(data)
    });
    const res = await response.json();
    return res;
});

export const getAllBloodRequests = createAsyncThunk("get/getAllBloodRequests", async (data: any) => {
    const response = await fetch(`${API_ROUTE}/admin/GetAllRequests`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + localStorage.getItem('token')
        },
        body: JSON.stringify(data)
    });
    const res = await response.json();
    return res;
});

export const getAllUsersAdmin = createAsyncThunk("get/getAllUsersAdmin", async (data: any) => {
    const response = await fetch(`${API_ROUTE}/admin/GetAllUsers`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + localStorage.getItem('token')
        },
        body: JSON.stringify(data)
    });
    const res = await response.json();
    return res;
});


export const getAllBloodBanks = createAsyncThunk("get/getAllBloodBanks", async (data: any) => {
    const response = await fetch(`${API_ROUTE}/admin/GetAllBloodBanks`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + localStorage.getItem('token')
        },
        body: JSON.stringify(data)
    });
    const res = await response.json();
    return res;
})

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


        adminDashData: [],
        adminDashDataLoading: false,


        drawerOpen: false,
        drawerData: {},

        allUsersData: [],
        allUsersDataLoading: false,

        bloodRequestsData: [],
        bloodRequestsDataLoading: false,

        bloodBankData: [],
        bloodBankDataLoading: false,

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


            .addCase(getAdminDash.pending, (state) => {
                state.adminDashDataLoading = true;
            })
            .addCase(getAdminDash.fulfilled, (state, action) => {
                state.adminDashData = action.payload;
                state.adminDashDataLoading = false;
            })

            .addCase(getAllUsersAdmin.pending, (state) => {
                state.allUsersDataLoading = true;
            }
            )
            .addCase(getAllUsersAdmin.fulfilled, (state, action) => {
                state.allUsersData = action.payload;
                state.allUsersDataLoading = false;
            })

            .addCase(getAllBloodRequests.pending, (state) => {
                state.bloodRequestsDataLoading = true;
            })
            .addCase(getAllBloodRequests.fulfilled, (state, action) => {
                state.bloodRequestsData = action.payload;
                state.bloodRequestsDataLoading = false;
            })

            .addCase(getAllBloodRequests.rejected, (state) => {
                state.bloodRequestsDataLoading = false;
            })

            .addCase(getAllBloodBanks.pending, (state) => {
                state.bloodBankDataLoading = true;
            })

            .addCase(getAllBloodBanks.fulfilled, (state, action) => {
                state.bloodBankData = action.payload;
                state.bloodBankDataLoading = false;
            })


    },
});

export const {
    setDrawerOpen,
    setDrawerData,
    setUsername
} = mainSlice.actions;