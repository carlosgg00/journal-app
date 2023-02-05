// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getEnvironments } from "../helpers";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// console.log( import.meta.env)
// console.log(process.env);

const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_DATABASEURL,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
} = getEnvironments();

// Your web app's Firebase configuration
// Dev/Prod
// const firebaseConfig = {
//   apiKey: "AIzaSyAQJOI0jxNjbWeA-6CLhqKHQbaThXQY68E",
//   authDomain: "react-curso-21a27.firebaseapp.com",
//   projectId: "react-curso-21a27",
//   storageBucket: "react-curso-21a27.appspot.com",
//   messagingSenderId: "963836410354",
//   appId: "1:963836410354:web:ae31aa13689ac36b95136b"
// };

// Testing
// const firebaseConfig = {
//   apiKey: "AIzaSyB9ZbvyDg0tRATaCOstQcgQ0uNw0DwLtrw",
//   authDomain: "testing-8ae5a.firebaseapp.com",
//   projectId: "testing-8ae5a",
//   storageBucket: "testing-8ae5a.appspot.com",
//   messagingSenderId: "924455406586",
//   appId: "1:924455406586:web:a4e19f7dfa1f0f285eb243"
// };

const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  databaseURL: VITE_DATABASEURL,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID,
};

// Initialize Firebase
export const firebaseApp  = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth( firebaseApp );
export const fireBaseDB   = getFirestore( firebaseApp );