import axios from "axios";
import { BACKEND_URL } from "../store";

const getProfile = async (url: string) =>
  axios.get(`${BACKEND_URL}/linkedin/profile?url=${url}`);

export default { getProfile };
