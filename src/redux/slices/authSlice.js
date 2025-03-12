import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../api";

export const Login = createAsyncThunk("login", async ({ email, password }) => {
    return await login(email, password);
});

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: [],
        isLogging: false,
        isLoggedIn: false,
        error: null,
    },
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(Login.pending, (state) => {
                state.isLoggedIn = false;
                state.isLogging = true;
            })
            .addCase(Login.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isLogging = false;
            })
            .addCase(Login.rejected, (state, action) => {
                state.isLogging = false;
                state.isLoggedIn = false;
                state.error = action.error.message;
            });
    },
});



export default authSlice.reducer;
