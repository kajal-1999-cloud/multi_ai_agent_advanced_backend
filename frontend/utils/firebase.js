// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "cortexai-7ca2c.firebaseapp.com",
  projectId: "cortexai-7ca2c",
  storageBucket: "cortexai-7ca2c.firebasestorage.app",
  messagingSenderId: "1001963991034",
  appId: "1:1001963991034:web:2b2e18b653bc591d637e43",
  // measurementId: "G-F6F29CS6CC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()