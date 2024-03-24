import axios from "axios";
import { BACKEND_URL } from "../store";

const getAllTasks = async (authToken: string) =>
  axios.get(`${BACKEND_URL}/tasks?token=${authToken}`);

const createTask = async (newTask: CreateTask) =>
  axios.post(`${BACKEND_URL}/tasks`, newTask);

const updateTask = async (newTask: UpdateTask, id: string) =>
  axios.put(`${BACKEND_URL}/tasks/${id}`, newTask);

const deleteTask = async (id: string) =>
  axios.delete(`${BACKEND_URL}/tasks/${id}`);

export default { getAllTasks, createTask, updateTask, deleteTask };
