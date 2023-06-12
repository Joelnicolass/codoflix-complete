import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
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
export const db = getFirestore(app);
