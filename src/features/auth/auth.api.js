import apiClient from "@lib/apiClient";
import { auth } from "@lib/firebase.config";

import {
  signInWithEmailAndPassword,
  signInWithCustomToken,
} from "firebase/auth";

const signUpUser = async (payload) => {
  const data = await apiClient(
    "/auth/register",
    {
      method: "POST",
      body: JSON.stringify(payload),
    },
    false,
  );

  await signInWithCustomToken(auth, data.data);
};

const loginUser = async (payload) => {
  await signInWithEmailAndPassword(auth, payload.email, payload.password);
};

const logoutUser = () => auth.signOut();

export default {
  signUpUser,
  loginUser,
  logoutUser,
};
