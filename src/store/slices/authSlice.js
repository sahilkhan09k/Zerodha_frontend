// src/store/slices/authSlice.js
// store/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,      // whether user is logged in
  userData: null,     // user info
  loading: true,      // while checking auth on startup
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload;
      state.loading = false;
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
      state.loading = false;
    },
    setUser: (state, action) => {
      state.status = true;
      state.userData = action.payload;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { login, logout, setUser, setLoading } = authSlice.actions;
export default authSlice.reducer;
