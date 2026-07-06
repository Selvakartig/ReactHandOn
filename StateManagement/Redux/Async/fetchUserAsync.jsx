import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUserAsync = createAsyncThunk(
    "fetchUser",

    async() => {
        const response = await fetch("https://dummyjson.com/users");

        return response.json()
    }
)

export default fetchUserAsync