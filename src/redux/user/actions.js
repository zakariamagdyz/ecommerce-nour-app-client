import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api-call-config/callConfig.js";

////////////////////////////////

// Check if user logged in

export const getUserState = createAsyncThunk(
  "getUserState/get",
  async (_, ThunkApi) => {
    const { rejectWithValue } = ThunkApi;
    try {
      const { data } = await axios.get("/users/isSignedIn");
      return data.data.user;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

// Sign up

export const signUp = createAsyncThunk(
  "signUp/post",
  async (body, ThunkApi) => {
    const { rejectWithValue } = ThunkApi;
    try {
      const { data } = await axios.post("/users/signUp", body);

      return data.message;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

// Activate account

export const activateAccount = createAsyncThunk(
  "activeAccount/post",
  async (body, ThunkApi) => {
    const { rejectWithValue } = ThunkApi;
    try {
      const { data } = await axios.post("/users/activateAccount", {
        token: body,
      });

      return data.data.user;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

// Sign out

export const signOut = createAsyncThunk("signout/get", async (_, ThunkApi) => {
  const { rejectWithValue } = ThunkApi;
  try {
    const { data } = await axios.get("/users/signout");
    return data.message;
  } catch ({ response }) {
    return rejectWithValue(response.data.message);
  }
});

// Login

export const signIn = createAsyncThunk(
  "signIn/post",
  async (body, ThunkApi) => {
    const { rejectWithValue } = ThunkApi;
    try {
      const { data } = await axios.post("/users/signin", body);
      return data.data.user;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

// Forgot password

export const forgotPass = createAsyncThunk(
  "forgotpass/patch",
  async (body, ThunkApi) => {
    const { rejectWithValue } = ThunkApi;
    try {
      const { data } = await axios.patch("/users/forgotPassword", body);
      return data.message;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

// Reset password

export const resetPass = createAsyncThunk(
  "resetPass/patch",
  async (body, ThunkApi) => {
    const { rejectWithValue } = ThunkApi;
    try {
      const { data } = await axios.patch(
        `/users/resetPassword/${body.token}`,
        body.data
      );
      return data.data.user;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

// Active account
