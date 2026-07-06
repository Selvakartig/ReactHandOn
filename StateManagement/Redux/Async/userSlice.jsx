import { createSlice } from "@reduxjs/toolkit";

import fetchUserAsync from "./fetchUserAsync";

const initialState = {
    users: [],
    loading: false,
    error: null
}

const userSlice = createSlice({
    name: "userSlice",

    initialState,

    reducers: {
        
    },

    extraReducers: (builder) => {

    builder

    .addCase(fetchUserAsync.pending, (state)=>{
        state.loading = true
    })

    .addCase(fetchUserAsync.fulfilled, (state,action) => {
        state.loading = false
        state.users = action.payload.users
    })

    .addCase(fetchUserAsync.rejected, (state, action)=> {
        state.error = action.error.message 
    })
    }
})

export default userSlice.reducer