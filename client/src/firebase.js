// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-c0af7.firebaseapp.com",
  projectId: "mern-auth-c0af7",
  storageBucket: "mern-auth-c0af7.appspot.com",
  messagingSenderId: "1060403624072",
  appId: "1:1060403624072:web:64709510be75895663073d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);