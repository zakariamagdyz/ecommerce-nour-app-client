import { createSlice } from "@reduxjs/toolkit";
import {
  activateAccount,
  signOut,
  signUp,
  signIn,
  forgotPass,
  resetPass,
  getUserState,
} from "./actions.js";

//

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isLoggedIn: false,
    isLoading: false,
    error: null,
    successMsg: null,
  },
  reducers: {
    // for Clear error whenever page changed
    resetMetaData: (state) => {
      state.error = null;
      state.successMsg = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserState.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.isLoggedIn = true;
      }) ////////////////////////////////////////////
      .addCase(activateAccount.pending, (state, action) => {
        state.error = null;
        state.successMsg = null;
        state.isLoading = true;
      })
      .addCase(activateAccount.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.successMsg =
          "Welcome to Nour store, Your account has been activated";
      })
      .addCase(activateAccount.rejected, (state, action) => {
        state.error = "Something went wrong, Please try againreesdf";
        state.isLoading = false;
      }) ///////////////////////////////////////////////////////////////
      .addCase(signIn.pending, (state) => {
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.error = action.payload;
      }) ///////////////////////////////////////////////////////////////
      .addCase(signOut.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.currentUser = null;
      }) ///////////////////////////////////////////////////////////////
      .addCase(signUp.pending, (state) => {
        state.error = null;
        state.successMsg = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.successMsg = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.error = action.payload;
      }) ///////////////////////////////////////////////////////////////
      .addCase(forgotPass.pending, (state) => {
        state.error = null;
        state.successMsg = null;
      })
      .addCase(forgotPass.fulfilled, (state, action) => {
        state.successMsg = action.payload;
      })
      .addCase(forgotPass.rejected, (state, action) => {
        state.error = action.payload;
      }) ///////////////////////////////////////////////////////////////
      .addCase(resetPass.pending, (state) => {
        state.error = null;
      })
      .addCase(resetPass.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(resetPass.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { resetMetaData } = userSlice.actions;

export default userSlice.reducer;
