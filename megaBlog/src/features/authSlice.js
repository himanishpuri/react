import { createSlice } from "@reduxjs/toolkit";
// to track if user is authenticated from store
const initialState = {
  status: false,
  userData: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
    }
  }
})

export default authSlice.reducer;
export const {login, logout} = authSlice.actions;