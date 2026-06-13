import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: null,
  token: localStorage.getItem("token") || null,
  isAuthenticated: !!localStorage.getItem("token"),
  authInitialized: false,
  loading: false,
}

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.token;
      state.isAuthenticated = true
    },

    setAuthInitialized: (state) => {
        state.authInitialized = true;
    },

    logout: (state) => {
      state.user = null
      state.token = null
      state.isAuthenticated = false

      localStorage.removeItem("token")
    },

    setLoading: (state, action) => {
      state.loading = action.payload
    },
  },
})

export const {
  setCredentials,
  setAuthInitialized,
  logout,
  setLoading,
} = authSlice.actions

export default authSlice.reducer