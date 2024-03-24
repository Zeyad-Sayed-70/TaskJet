import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from "./services";

export const getAllTasks = createAsyncThunk(
  "tasks/getAll",
  async (authToekn: string, { rejectWithValue }) => {
    try {
      const response = await Api.getAllTasks(authToekn);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const createTask = createAsyncThunk(
  "tasks/create",
  async (newTask: CreateTask, { rejectWithValue }) => {
    try {
      const res = await Api.createTask(newTask);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const updateTask = createAsyncThunk(
  "tasks/update",
  async (
    { newTask, id }: { newTask: UpdateTask; id: string },
    { rejectWithValue }
  ) => {
    try {
      const res = await Api.updateTask(newTask, id);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/delete",
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await Api.deleteTask(id);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
