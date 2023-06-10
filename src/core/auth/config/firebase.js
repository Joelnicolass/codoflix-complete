// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtExOH4vScaUWKWKGkJPMa9Y_8Nw73LKk",
  authDomain: "codo-a-codo-6dcfd.firebaseapp.com",
  projectId: "codo-a-codo-6dcfd",
  storageBucket: "codo-a-codo-6dcfd.appspot.com",
  messagingSenderId: "382826449414",
  appId: "1:382826449414:web:03383b867ed87e53aa5187",
  measurementId: "G-CSD7NTFP94",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
