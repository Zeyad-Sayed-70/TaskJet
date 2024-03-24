import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "./services";

export const signup = createAsyncThunk(
  "auth/signup",
  async (authSignUp: AuthSignUp, { rejectWithValue }) => {
    try {
      const response = await Api.signup(authSignUp);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const signin = createAsyncThunk(
  "auth/signin",
  async (authSignIn: AuthSignIn, thunkAPI) => {
    try {
      return await Api.signin(authSignIn);
    } catch (error: any) {
      thunkAPI.rejectWithValue(error.message);
      throw new Error(error.message);
    }
  }
);

interface InitialState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  auth: { token: string; data: any } | null;
  message: string;
}

const initialState: InitialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  auth: null,
  message: "",
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.auth = action.payload;
      })
      .addCase(signup.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // (action.payload as any).data.message;
      })
      .addCase(signin.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.auth = action.payload.data;
      })
      .addCase(signin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // state.message = (action.payload as any).data.message;
      });
  },
});

export const {} = AuthSlice.actions;

export default AuthSlice.reducer;
