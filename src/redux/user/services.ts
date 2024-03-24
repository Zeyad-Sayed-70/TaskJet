import axios from "axios";
import { BACKEND_URL } from "../store";

const getUserData = async (token: string) =>
  axios.get(`${BACKEND_URL}/auth/user?token=${token}`);

export default { getUserData };
