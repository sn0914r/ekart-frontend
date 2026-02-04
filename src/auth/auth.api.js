import apiClient from "../lib/apiClient";
import { auth } from "../configs/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";

/**
 * @desc registers a new user
 * @access public
 *
 * @param {{ name: string, email: string, password: string }} payload
 * @returns {Promise<object>}
 */
const signUpUser = (payload) =>
  apiClient("/auth/register", {
    method: "POST",
    body: JSON.stringify(payload),
  });

/**
 * @desc logs in a user
 * @access public
 *
 * @param {{ email: string, password: string }} payload
 * @returns {Promise<object>}
 */
const loginUser = async (payload) => {
  await signInWithEmailAndPassword(auth, payload.email, payload.password);
};

/**
 * @desc logs out a user
 * @access private
 */
const logoutUser = () => auth.signOut();

export default {
  signUpUser,
  loginUser,
  logoutUser,
};
