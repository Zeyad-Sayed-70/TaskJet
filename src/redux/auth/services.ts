import axios from "axios";
import { BACKEND_URL } from "../store";

const signup = async (authSignUp: AuthSignUp) =>
  axios.post(`${BACKEND_URL}/auth/signup`, authSignUp);

const signin = async (authSignIn: AuthSignIn) =>
  axios.post(`${BACKEND_URL}/auth/signin`, authSignIn);

const fetchUser = async (token: string) =>
  axios.get(`${BACKEND_URL}/auth/user?token=${token}`);

export default { signup, signin, fetchUser };
