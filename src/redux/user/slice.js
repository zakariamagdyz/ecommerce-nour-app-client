import { createSlice } from "@reduxjs/toolkit";
import { signIn } from "./actions.js";

const userSlice = createSlice({
  name: "user",
  initialState: { currentUser: null, isLoading: false, error: null },
  extraReducers: (builder) => {
    // builder.addCase(signIn.pending, (state, action) => {});
  },
});

export default userSlice.reducer;
