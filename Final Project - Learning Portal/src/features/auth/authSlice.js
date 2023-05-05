import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: undefined,
  user: undefined,
  role: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
      state.role = action.payload.user?.role;
    },
    userLoggedOut: (state, action) => {
      state.accessToken = undefined;
      state.user = undefined;
      state.role = undefined;
    },
  },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;
