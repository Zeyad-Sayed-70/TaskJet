import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "./services";

export const getUserData = createAsyncThunk(
  "user/get",
  async ({ token }: { token: string }, thunkAPI) => {
    try {
      const res = await API.getUserData(token);
      return res.data;
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
  userData: UserData | null;
  message: string;
}

const initialState: InitialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  userData: null,
  message: "",
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userData = action.payload;
      })
      .addCase(getUserData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        // state.message = (action.payload as any).data.message;
      });
  },
});

export const {} = UserSlice.actions;

export default UserSlice.reducer;
