import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "./services";

export const getProfile = createAsyncThunk(
  "linkedin/profile",
  async (url: string, { rejectWithValue }) => {
    try {
      const res = await Api.getProfile(url);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

interface InitialState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
  profile: LinkedInProfile | null;
}

const initialState: InitialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
  profile: null,
};

const LinkedInSlice = createSlice({
  name: "linkedin",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.profile = null;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProfile.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.profile = actions.payload;
      })
      .addCase(getProfile.rejected, (state, actions) => {
        state.isLoading = false;
        state.isError = true;
        // state.message = (actions.payload as any).message;
      });
  },
});

export const { reset } = LinkedInSlice.actions;

export default LinkedInSlice.reducer;
