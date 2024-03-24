import { createSlice } from "@reduxjs/toolkit";
import { createTask, deleteTask, getAllTasks, updateTask } from "./thunks";

interface InitialState {
  isFetchLoading: boolean;
  isCreateLoading: boolean;
  isUpdateLoading: boolean;
  isDeleteLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
  tasks: Task[];
  task: Task | null;
}

const initialState: InitialState = {
  isFetchLoading: false,
  isCreateLoading: false,
  isUpdateLoading: false,
  isDeleteLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
  tasks: [],
  task: null,
};

const TasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    reset: (state) => {
      state.isUpdateLoading = false;
      state.isFetchLoading = false;
      state.isCreateLoading = false;
      state.isDeleteLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.task = null;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle getAllTasks
      .addCase(getAllTasks.pending, (state) => {
        state.isFetchLoading = true;
      })
      .addCase(getAllTasks.fulfilled, (state, action) => {
        state.isFetchLoading = false;
        state.isSuccess = true;
        state.tasks = action.payload;
      })
      .addCase(getAllTasks.rejected, (state, action) => {
        state.isFetchLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      })
      // Handle createTask
      .addCase(createTask.pending, (state) => {
        state.isCreateLoading = true;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.isCreateLoading = false;
        state.isSuccess = true;
        state.task = action.payload;
      })
      .addCase(createTask.rejected, (state, action) => {
        state.isCreateLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      })
      // Handle updateTask
      .addCase(updateTask.pending, (state) => {
        state.isUpdateLoading = true;
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        state.isUpdateLoading = false;
        state.isSuccess = true;
        state.task = action.payload;
      })
      .addCase(updateTask.rejected, (state, action) => {
        state.isUpdateLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      })
      // Handle deleteTask
      .addCase(deleteTask.pending, (state) => {
        state.isDeleteLoading = true;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isDeleteLoading = false;
        state.isSuccess = true;
        state.task = action.payload;
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.isDeleteLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      });
  },
});

export const { reset } = TasksSlice.actions;

export default TasksSlice.reducer;
