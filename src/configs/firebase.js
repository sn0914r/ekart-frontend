import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQ6ldkzaUxiks7HYOqaHryQdst-DvLr_Q",
  authDomain: "learning-firebase-sdk.firebaseapp.com",
  projectId: "learning-firebase-sdk",
  storageBucket: "learning-firebase-sdk.firebasestorage.app",
  messagingSenderId: "213609173928",
  appId: "1:213609173928:web:8ea4c34d2ae8cc2341c39d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
