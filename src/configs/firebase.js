import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDf1E7IA7oS7Wm1MLzSKDHcUbwQ4eUK1WE",
  authDomain: "ekart-2c685.firebaseapp.com",
  projectId: "ekart-2c685",
  storageBucket: "ekart-2c685.firebasestorage.app",
  messagingSenderId: "767449158234",
  appId: "1:767449158234:web:86722237468e36a4223e63"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
