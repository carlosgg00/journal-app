// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQJOI0jxNjbWeA-6CLhqKHQbaThXQY68E",
  authDomain: "react-curso-21a27.firebaseapp.com",
  projectId: "react-curso-21a27",
  storageBucket: "react-curso-21a27.appspot.com",
  messagingSenderId: "963836410354",
  appId: "1:963836410354:web:ae31aa13689ac36b95136b"
};

// Initialize Firebase
export const firebaseApp  = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth( firebaseApp );
export const fireBaseDB   = getFirestore( firebaseApp );