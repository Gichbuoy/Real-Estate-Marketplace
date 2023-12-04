// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-e1a6e.firebaseapp.com",
  projectId: "mern-estate-e1a6e",
  storageBucket: "mern-estate-e1a6e.appspot.com",
  messagingSenderId: "199562738869",
  appId: "1:199562738869:web:97489a337ebfb6e6ac52fc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);